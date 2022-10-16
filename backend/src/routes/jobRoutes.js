const router = require('express').Router()

const Job = require('../models/Job')

const checkToken = require('../middlewares/checkToken')


router.post('/', checkToken, async (req, res) => {

    const { desc, img, tags, photos } = req.body

    if(!desc || !img || !tags.length || !photos.length){
        return res.status(422).json({message: 'Todos os campos são obrigatórios'})
    }

    const job = {
        desc,
        img,
        tags,
        photos
    }

    try {
        await Job.create(job)
        res.status(201).json({message: 'Serviço cadastrado!'})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Erro do lado do servidor!'})                      
    }
});


router.get('/', async (req, res) => {

    try {
         
        const jobs = await Job.find()
        res.status(200).json(jobs)

    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Erro do lado do servidor!'})                      
    }
});


router.get('/:id', checkToken, async (req, res) => {
    
    const id = req.params.id

    try {
        const job = await Job.findOne({_id: id})

        if(!job) {
            return res.status(404).json({message: 'Serviço não encontrado'})
        }

        res.status(200).json(job)

    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Erro do lado do servidor!'})                     
    }
});


router.patch('/:id', checkToken, async (req, res) => {

    const id = req.params.id
    const { desc, img, tags, photos } = req.body

    if(!desc && !img && !tags.length && !photos.length){
        return res.status(422).json({message: 'Nenhuma atualização foi requisitada'})
    }

    const job = {
        desc,
        img,
        tags,
        photos
    }

    try {

        const updateJob = await Job.updateOne({_id: id}, job)

        if(updateJob.matchedCount === 0) {
            return res.status(404).json({message: 'Serviço não encontrado'})
        }

        res.status(200).json(job)

    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Erro do lado do servidor!'})                      
    }
});


router.delete('/:id', checkToken, async (req, res) => {
    
    const id = req.params.id

    try {
        const job = await Job.findOne({_id: id})

        if(!job) {
            return res.status(404).json({message: 'Serviço não encontrado'})
        }
         
        await Job.deleteOne({_id: id})

        res.status(200).json({message: 'Serviço removido com sucesso'})

    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Erro do lado do servidor!'})                   
    }
});


module.exports = router;
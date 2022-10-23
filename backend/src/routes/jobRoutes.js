const router = require('express').Router()

const Job = require('../models/Job')

const checkToken = require('../middlewares/checkToken')


router.post('/', async (req, res) => {

    console.log(req.body)
    const { name, desc, img, photos } = req.body

    if(!name || !desc || !img.length || !photos.length){
        return res.status(422).json({message: 'Todos os campos são obrigatórios'})
    }

    const job = {
        name,
        desc,
        img,
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


router.get('/:id', async (req, res) => {
    
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


router.patch('/:id', async (req, res) => {

    const id = req.params.id
    const { name, desc, img, photos } = req.body

    if(!name && !desc && !img.length && !photos.length){
        return res.status(422).json({message: 'Nenhuma atualização foi requisitada'})
    }

    const job = {
        name,
        desc,
        img,
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


router.delete('/:id', async (req, res) => {
    
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
const router = require('express').Router()

const Job = require('../models/Job')

const checkToken = require('../middlewares/checkToken')


router.post('/', checkToken, async (req, res) => {

    const { name, desc, photos } = req.body

    if(!name || !desc || !photos){
        return res.status(422).json({message: 'Todos os campos são obrigatórios'})
    }

    const job = {
        name,
        desc,
        photos
    }

    try {
        await Job.create(job)
        res.status(201).json({message: 'Serviço cadastrado!'})
    } catch (error) {
        res.status(500).json({erro: error})                
    }
});


router.get('/', checkToken, async (req, res) => {

    try {
         
        const jobs = await Job.find()
        res.status(200).json(jobs)

    } catch (error) {
        res.status(500).json({erro: error})                
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
        res.status(500).json({erro: error})                
    }
});


router.patch('/:id', checkToken, async (req, res) => {

    const id = req.params.id
    const { name, desc, photos } = req.body

    if(!name && !desc && photos.length === 0){
        return res.status(422).json({message: 'Nenhuma atualização foi requisitada'})
    }

    const job = {
        name,
        desc,
        photos
    }

    try {

        const updateJob = await Job.updateOne({_id: id}, job)

        if(updateJob.matchedCount === 0) {
            return res.status(404).json({message: 'Serviço não encontrado'})
        }

        res.status(200).json(job)

    } catch (error) {
        res.status(500).json({erro: error})                
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
        res.status(500).json({erro: error})                
    }
});


module.exports = router;
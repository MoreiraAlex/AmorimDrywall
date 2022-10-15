const router = require('express').Router()

const { json } = require('express');
const Job = require('../models/Job')


router.post('/', async (req, res) => {

    const { name, desc } = req.body

    if(!name || !desc){
        res.status(422).json({message: 'Todos os campos são obrigatórios'})
    }

    const job = {
        name,
        desc
    }

    try {
        await Job.create(job)
        res.status(201).json({message: 'Serviço cadastrado!'})
    } catch (error) {
        res.status(500).json({erro: error})                
    }
});


router.get('/', async (req, res) => {

    try {
         
        const jobs = await Job.find()
        res.status(200).json(jobs)

    } catch (error) {
        res.status(500).json({erro: error})                
    }
});


router.get('/:id', async (req, res) => {
    
    const id = req.params.id

    try {
        const job = await Job.findOne({_id: id})

        if(!job) {
            return res.status(422).json({message: 'Serviço não encontrado'})
        }

        res.status(200).json(job)

    } catch (error) {
        res.status(500).json({erro: error})                
    }
});


router.patch('/:id', async (req, res) => {

    const id = req.params.id
    const { name, desc } = req.body

    if(!name && !desc){
        res.status(422).json({message: 'Nenhuma atualização foi requisitada'})
    }

    const job = {
        name,
        desc
    }

    try {

        const updateJob = await Job.updateOne({_id: id}, job)

        if(updateJob.matchedCount === 0) {
            return res.status(422).json({message: 'Serviço não encontrado'})
        }

        res.status(200).json(job)

    } catch (error) {
        res.status(500).json({erro: error})                
    }
});


router.delete('/:id', async (req, res) => {
    
    const id = req.params.id

    try {
        const job = await Job.findOne({_id: id})

        if(!job) {
            return res.status(422).json({message: 'Serviço não encontrado'})
        }
         
        await Job.deleteOne({_id: id})

        res.status(200).json({message: 'Serviço removido com sucesso'})

    } catch (error) {
        res.status(500).json({erro: error})                
    }
});


module.exports = router;
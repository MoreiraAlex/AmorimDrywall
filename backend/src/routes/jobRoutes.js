const router = require('express').Router()

const Job = require('../db/models/Job')

const checkToken = require('../middlewares/checkToken')


router.post('/', checkToken, async (req, res) => {

    console.log(req.body)
    const { name, desc } = req.body

    if(!name || !desc){
        return res.status(422).json({message: 'Todos os campos são obrigatórios'})
    }

    const job = {
        name,
        desc
    }

    try {
        const newJob = await Job.create(job)

        res.status(201).json(newJob)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Erro do lado do servidor!'})                      
    }
});


router.get('/', async (req, res) => {

    try {

        const jobs = await Job.findAll()

        if(jobs.length === 0){
            return res.status(404).json({message: 'Nenhum serviço cadastrado!'})
        }

        res.status(200).json(jobs)

    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Erro do lado do servidor!'})                      
    }
});


router.get('/:id', async (req, res) => {
    
    const id = req.params.id

    try {
        const job = await Job.findOne({ where: { id: id } })

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
    const { name, desc } = req.body

    if(!name && !desc){
        return res.status(422).json({message: 'Nenhuma atualização foi requisitada'})
    }

    const job = {
        name,
        desc
    }

    try {

        const updateJob = await Job.update(job, {where: { id: id } })

        if(updateJob === 0) {
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
        const job = await Job.findOne({ where: { id: id } })

        if(!job) {
            return res.status(404).json({message: 'Serviço não encontrado'})
        }
         
        await Job.destroy({ where: { id: id } })

        res.status(200).json({message: 'Serviço removido com sucesso'})

    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Erro do lado do servidor!'})                   
    }
});


router.delete('/delete/all', checkToken, async (req, res) => {

    try {
         
        await Job.destroy({
            truncate: true
        });

        res.status(200).json({message: 'Tabela limpa!'})

    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Erro do lado do servidor!'})                
    }
});


module.exports = router;
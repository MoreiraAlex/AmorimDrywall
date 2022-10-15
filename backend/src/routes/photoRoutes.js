const router = require('express').Router()

const Photo = require('../models/Photo')


router.post('/', async (req, res) => {
    const { job, url } = req.body

    if(!job || !url){
        res.status(422).json({message: 'Todos os campos são obrigatórios'})
    }

    const photo = {
        job,
        url
    }

    try {
        await Photo.create(photo)
        res.status(201).json({message: 'Serviço cadastrado!'})
    } catch (error) {
        res.status(500).json({erro: error})                
    }
});

module.exports = router;
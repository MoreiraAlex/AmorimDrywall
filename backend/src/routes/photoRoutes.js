const router = require('express').Router()
const multer = require('multer')

const Photo = require('../models/Photo')

const checkToken = require('../middlewares/checkToken')
const multerConfig = require('../config/multer')
const aws = require('aws-sdk')


router.post('/', checkToken, multer(multerConfig).single('file'), async (req, res) => {

    const { originalname: name, size, key, location: url} = req.file

    const photo = {
        name,
        size,
        key, 
        url
    }

    try {
        await Photo.create(photo)
        res.status(201).json({message: 'Imagem cadastrada!'})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Erro do lado do servidor!'})   
    }
});

router.get('/', async (req, res) => {

    try {
         
        const photos = await Photo.find()
        res.status(200).json(photos)

    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Erro do lado do servidor!'})                      
    }
});


router.get('/:id', checkToken, async (req, res) => {
    
    const id = req.params.id

    try {
        const photo = await Photo.findOne({_id: id})

        if(!photo) {
            return res.status(404).json({message: 'Imagem não encontrada'})
        }

        res.status(200).json(photo)

    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Erro do lado do servidor!'})                     
    }
});


router.patch('/:id', checkToken, multer(multerConfig).single('file'), async (req, res) => {

    const id = req.params.id
    const { originalname: name, size, key, location: url} = req.file

    if(!name && !size && !key && !url){
        return res.status(422).json({message: 'Nenhuma atualização foi requisitada'})
    }

    const photo = {
        name,
        size,
        key, 
        url
    }

    try {

        const updateUpdate = await Photo.updateOne({_id: id}, photo)

        if(updateUpdate.matchedCount === 0) {
            return res.status(404).json({message: 'Imagem não encontrada'})
        }

        res.status(200).json(photo)

    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Erro do lado do servidor!'})                      
    }
});


router.delete('/:id', checkToken, async (req, res) => {
    
    const id = req.params.id

    try {
        const photo = await Photo.findOne({_id: id})

        if(!photo) {
            return res.status(404).json({message: 'Imagem não encontrada'})
        }

        const s3 = new aws.S3();

        s3.deleteObject({
            Bucket: process.env.AWS_BUCKET,
            Key: photo.key
        }).promise()
         
        await Photo.deleteOne({_id: id})

        res.status(200).json({message: 'Imagem removida com sucesso'})

    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Erro do lado do servidor!'})                   
    }
});


module.exports = router;
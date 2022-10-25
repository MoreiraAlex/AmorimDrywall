const router = require('express').Router()
const multer = require('multer')

const Image = require('../db/models/Image')

const checkToken = require('../middlewares/checkToken')
const multerConfig = require('../config/multer')
const aws = require('aws-sdk')


router.post('/', multer(multerConfig).single('file'), async (req, res) => {

    const { originalname: name, size, key, location: url} = req.file

    
    const image = {
        name,
        size,
        key, 
        url 
    }

    if(!image.url) {
        image.url = `http://localhost:3030/files/${key}`
    }

    try {
        await Image.create(image)
        res.status(200).json(image)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Erro do lado do servidor!'})   
    }
});

router.get('/', async (req, res) => {

    try {
         
        const images = await Image.findAll()

        if(images.length === 0){
            return res.status(404).json({message: 'Nenhuma imagem cadastrada!'})
        }

        res.status(200).json(images)

    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Erro do lado do servidor!'})                      
    }
});


router.get('/:id', async (req, res) => {
    
    const id = req.params.id

    try {
        const image = await Image.findOne({ where: { id: id } })

        if(!image) {
            return res.status(404).json({message: 'Imagem não encontrada'})
        }

        res.status(200).json(image)

    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Erro do lado do servidor!'})                     
    }
});


router.patch('/:id', multer(multerConfig).single('file'), async (req, res) => {

    const id = req.params.id
    const { originalname: name, size, key, location: url} = req.file

    if(!name && !size && !key && !url){
        return res.status(422).json({message: 'Nenhuma atualização foi requisitada'})
    }

    const image = {
        name,
        size,
        key, 
        url
    }

    if(!image.url) {
        image.url = `http://localhost:3030/files/${key}`
    }

    try {

        const updateUpdate = await Image.update(image, {where: { id: id } })

        if(updateUpdate.matchedCount === 0) {
            return res.status(404).json({message: 'Imagem não encontrada'})
        }

        res.status(200).json(image)

    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Erro do lado do servidor!'})                      
    }
});


router.delete('/:key', async (req, res) => {
    
    const key = req.params.key

    try {
        const image = await Image.findOne({ where: { key: key } })

        if(!image) {
            return res.status(404).json({message: 'Imagem não encontrada'})
        }

        const s3 = new aws.S3();

        s3.deleteObject({
            Bucket: process.env.AWS_BUCKET,
            Key: image.key
        }).promise()
         
        await Image.destroy({ where: { key: key } })

        res.status(200).json({message: 'Imagem removida com sucesso'})

    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Erro do lado do servidor!'})                   
    }
});


router.delete('/delete/all', async (req, res) => {

    try {
         
        await Image.destroy({
            truncate: true
        });

        res.status(200).json({message: 'Tabela limpa!'})

    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Erro do lado do servidor!'})                
    }
});


module.exports = router;
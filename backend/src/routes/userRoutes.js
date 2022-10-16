const router = require('express').Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/User')

const checkToken = require('../middlewares/checkToken')


router.post('/', async (req, res) => {

    const { username, password } = req.body

    if(!username || !password){
        return res.status(422).json({message: 'Todos os campos são obrigatórios'})
    }


    try {

        const checkExists = await User.findOne({username: username})

        if(checkExists){
            return res.status(422).json({message: 'Username ja cadastrado'})
        }

        const salt = await bcrypt.genSalt(12)
        const passwordHash = await bcrypt.hash(password, salt)

        const user = {
            username,
            password: passwordHash
        }

        await User.create(user)

        res.status(201).json({message: 'Usuario cadastrado!'})

    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Erro do lado do servidor!'})                
    }
});


router.get('/', checkToken, async (req, res) => {

    try {
         
        const users = await User.find()

        console.log(users)

        if(users.length === 0){
            return res.status(404).json({message: 'Nenhum usuario cadastrado!'})
        }

        res.status(200).json(users)

    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Erro do lado do servidor!'})                
    }
});


router.get('/:id', async (req, res) => {
    
    const id = req.params.id

    try {
        const user = await User.findOne({_id: id}, '-password')

        if(!user) {
            return res.status(404).json({message: 'Usuario não encontrado'})
        }

        res.status(200).json(user)

    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Erro do lado do servidor!'})                 
    }
});


router.patch('/:id', async (req, res) => {

    const id = req.params.id
    const { username, password } = req.body

    if(!username && !password){
        return res.status(422).json({message: 'Nenhuma atualização foi requisitada'})
    }

    try {

        const salt = await bcrypt.genSalt(12)
        const passwordHash = await bcrypt.hash(password, salt)

        const user = {
            username,
            password: passwordHash
        }

        const updateJob = await User.updateOne({_id: id}, user)

        if(updateJob.matchedCount === 0) {
            return res.status(404).json({message: 'Usuario não encontrado'})
        }

        res.status(200).json(user)

    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Erro do lado do servidor!'})                 
    }
});


router.delete('/:id', async (req, res) => {
    
    const id = req.params.id

    try {
        const user = await User.findOne({_id: id})

        if(!user) {
            return res.status(404).json({message: 'Usuario não encontrado'})
        }
         
        await User.deleteOne({_id: id})

        res.status(200).json({message: 'Usuario removido com sucesso'})

    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Erro do lado do servidor!'})                 
    }
});


router.post('/login', async (req, res) => {

    const { username, password } = req.body

    if(!username ){
        return res.status(422).json({message: 'O username é obrigatório'})
    }

    if(!password){
        return res.status(422).json({message: 'A senha é obrigatória'})
    }

    try {

        const user = await User.findOne({username: username})

        if(!user){
            return res.status(404).json({message: 'Usuario não encontrado'})
        }

        const checkPassword = await bcrypt.compare(password, user.password) 

        if(!checkPassword){
            return res.status(422).json({message: 'Senha invalida!'})
        }

        const secret = process.env.AMORIM_DRYWALL_SECRET
        const token = jwt.sign({
            id: user._id
        }, secret)

        res.status(200).json({message: 'Autenticação realizada com sucesso!', token})

    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Erro do lado do servidor!'})                 
    }
});


module.exports = router;
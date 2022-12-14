const router = require('express').Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../db/models/User')

const checkToken = require('../middlewares/checkToken')


router.post('/', async (req, res) => {

    const { username, password } = req.body

    if(!username || !password){
        return res.status(422).json({message: 'Todos os campos são obrigatórios'})
    }

    try {

        const checkExists = await User.findOne({ where: { username: username } })

        if(checkExists){
            return res.status(422).json({message: 'Username ja cadastrado'})
        }

        const salt = await bcrypt.genSalt(12)
        const passwordHash = await bcrypt.hash(password, salt)

        const user = {
            username,
            password: passwordHash,
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
         
        const users = await User.findAll()

        if(users.length === 0){
            return res.status(404).json({message: 'Nenhum usuario cadastrado!'})
        }

        res.status(200).json(users)

    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Erro do lado do servidor!'})                
    }
});


router.get('/:id', checkToken, async (req, res) => {
    
    const id = req.params.id

    try {
        const user = await User.findOne({ where: { id: id } })

        if(!user) {
            return res.status(404).json({message: 'Usuario não encontrado'})
        }

        res.status(200).json(user)

    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Erro do lado do servidor!'})                 
    }
});


router.patch('/:id', checkToken, async (req, res) => {

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

        const updateJob = await User.update(user, {where: { id: id } })

        if(updateJob === 0) {
            return res.status(404).json({message: 'Usuario não encontrado'})
        }

        res.status(200).json(user)

    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Erro do lado do servidor!'})                 
    }
});


router.delete('/:id', checkToken, async (req, res) => {
    
    const id = req.params.id

    try {
        const user = await User.findOne({ where: { id: id } })

        if(!user) {
            return res.status(404).json({message: 'Usuario não encontrado'})
        }
         
        await User.destroy({ where: { id: id } })

        res.status(200).json({message: 'Usuario removido com sucesso'})

    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Erro do lado do servidor!'})                 
    }
});


router.delete('/delete/all', checkToken, async (req, res) => {

    try {
         
        await User.destroy({
            truncate: true
        });

        res.status(200).json({message: 'Tabela limpa!'})

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

        const user = await User.findOne({ where: { username: username } })

        if(!user){
            return res.status(404).json({message: 'Usuario não encontrado'})
        }

        const checkPassword = await bcrypt.compare(password, user.password) 

        if(!checkPassword){
            return res.status(422).json({message: 'Senha invalida!'})
        }

        const secret = process.env.SECRET
        const token = jwt.sign({
            id: user._id
        }, secret, {
            expiresIn: '60m'
        })

        res.status(200).json({message: 'Autenticação realizada com sucesso!', token})

    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Erro do lado do servidor!'})                 
    }
});


module.exports = router;
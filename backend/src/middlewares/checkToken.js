const jwt = require('jsonwebtoken')

const checkToken = (req, res, next) => {
    
    const authHeader = req.headers['authorization']
    const token = authHeader ? authHeader.split(' ')[1] : null

    if(!token){
        console.log('Acesso negado!')
        return res.status(401)
    }

    try {

        const secret = process.env.SECRET

        jwt.verify(token, secret)

        next()
        
    } catch (error) {
        return res.status(400).json({message: 'Token invalido'})
    }
}

module.exports = checkToken;
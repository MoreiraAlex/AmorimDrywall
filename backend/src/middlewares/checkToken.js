const jwt = require('jsonwebtoken')

const checkToken = (req, res, next) => {
    
    const authHeader = req.headers['authorization']
    const token = authHeader ? authHeader.split(' ')[1] : null

    if(!token){
        return res.status(401).json({message: 'Acesso negado'})
    }

    try {

        const secret = process.env.AMORIM_DRYWALL_SECRET

        jwt.verify(token, secret)

        next()
        
    } catch (error) {
        return res.status(400).json({message: 'Token invalido'})
    }
}

module.exports = checkToken;
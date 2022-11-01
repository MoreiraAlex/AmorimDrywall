require('dotenv').config()
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const userRoutes = require('./routes/userRoutes')
const jobRoutes = require('./routes/jobRoutes')
const imageRoutes = require('./routes/imageRoutes')

const app = express();

// app.use(cors());
app.use(morgan('dev'));

app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,PATCH,DELETE")
    app.use(cors())
    next()
});

app.use('/auth', userRoutes)
app.use('/job', jobRoutes)
app.use('/upload', imageRoutes)

if(process.env.STORAGE == 'local'){
    app.use('/files', express.static(path.resolve(__dirname, '..', 'temp', 'upload')))
}

app.listen(process.env.PORT, () => console.log(`Rodando na porta ${process.env.PORT}...`));

app.get('/', async (req, res) => {
    return res.status(200).json({message: 'OK'})
});

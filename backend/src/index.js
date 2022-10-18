require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');


const userRoutes = require('./routes/userRoutes')
const jobRoutes = require('./routes/jobRoutes')
const photoRoutes = require('./routes/photoRoutes')

const app = express();
app.use(cors());
app.use(morgan('dev'));

app.use(express.json());

app.use('/auth', userRoutes)
app.use('/job', jobRoutes)
app.use('/upload', photoRoutes)

mongoose.connect(
    `mongodb+srv://${process.env.AMORIM_DRYWALL_DB_USER}:${process.env.AMORIM_DRYWALL_DB_PASS}@amorimdrywall.sacj0wh.mongodb.net/?retryWrites=true&w=majority`
    ).then(() => {
        console.log('Banco de dados conectado com sucesso!');
        app.listen(process.env.AMORIM_DRYWALL_PORT);
        console.log(`Rodando na porta ${process.env.AMORIM_DRYWALL_PORT}...`);
    }).catch((error) => console.log(error));

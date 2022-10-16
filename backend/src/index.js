require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');

const userRoutes = require('./routes/userRoutes')
const jobRoutes = require('./routes/jobRoutes')

const app = express();
app.use(cors());

app.use(express.json());

app.use('/auth', userRoutes)
app.use('/job', jobRoutes)

mongoose.connect(
    `mongodb+srv://${process.env.AMORIM_DRYWALL_DB_USER}:${process.env.AMORIM_DRYWALL_DB_PASS}@amorimdrywallapi.vpgofpv.mongodb.net/?retryWrites=true&w=majority`
    ).then(() => {
        console.log('Banco de dados conectado com sucesso!');
        app.listen(process.env.AMORIM_DRYWALL_PORT);
        console.log(`Rodando na porta ${process.env.PORT}...`);
    }).catch((error) => console.log(error));

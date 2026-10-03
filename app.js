const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const usuarioRoutes = require('./routes/usuarioRoutes');
const contatoRoutes = require('./routes/contatoRoutes');
const uploadRoutes = require('./routes/uploadRoutes');

const app = express();

app.use(express.json());

app.use('/api/usuarios', usuarioRoutes);
app.use('/api/contatos', contatoRoutes);
app.use('/api/uploads', uploadRoutes);

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Ligação ao MongoDB estabelecida com sucesso.'))
    .catch(err => console.error('Erro ao ligar ao MongoDB:', err));

module.exports = app;
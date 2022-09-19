// importando o express para ser usado em cada modula
const { application, request } = require('express');
const express = require('express');
const router = express.Router();

// fazendo os tratamentos da rotas de barras
app.get('/',(req,res)=>{
    res.send('app online ')
});

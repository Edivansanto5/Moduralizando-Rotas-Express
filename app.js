const express = require('express');

const routers = require('./api');

const app = express();

app.use(express.json());
app.use('/',routers);

// criando o servidor 
app.listen(3000,()=>{
    console.log('http://localhost:3000');
})
const express = require('express');

const app = express();

app.use(express.json());

// criando o servidor 
app.listen(3000,()=>{
    console.log('http://localhost:3000');
})
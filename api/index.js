// importando o express para ser usado em cada modula

const express = require('express');
const router = express.Router();

// fazendo os tratamentos da rotas de barras
router.get('/',(req,res)=>{
    res.send('app online ')
});

router.use('/cursos',cursos)

module.exports = router;

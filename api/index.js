
const express = require('express');

const cursoRouter = require('./cursos');
const estudantesRouter  = require('./estudantes');

const router = express.Router();

router.get('/',(req,res)=>{
    res.send('app online ');
});

router.use('/cursos',cursoRouter);
router.use('/estudantes',estudantesRouter);

module.exports = router;

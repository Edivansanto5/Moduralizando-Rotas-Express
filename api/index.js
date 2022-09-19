
const express = require('express');

const cursoRouter = require('./cursos');
const estudantesRouter  = require('./estudantes');

const router = express.Router();

router.get('/',(req,res)=>{
    res.send('app online ');
});

router.use('/',cursoRouter);
router.use('/',estudantesRouter);

module.exports = router;

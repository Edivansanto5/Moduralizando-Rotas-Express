const express = require('express');
const router  = express.Router();

const listaCurso = []

// criando a rota de curso
router.get('/cursos',(req,res) => {
    res.json(listaCurso);
});

// criando a rota para pegare dados de cursos
router.post('/cursos',(req,res) =>{
    const dadosCursos = req.body;
    listaCurso.push(dadosCursos)
    console.log(dadosCursos);
    app.send('Curso adicionado com sucesso!!!!')

});

module.exports = router;
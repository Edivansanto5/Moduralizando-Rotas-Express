const express = require('express');
const router  = express.Router();


// criando a rota de curso
router.get('/cursos',(req,res) => {
    res.send('Lista de cursos');
});

// criando a rota para pegare dados de cursos
router.push('/cursos',(req,res) =>{
    const dadosCursos = req.body;
    console.log(dadosCursos);
    app.send('Curso adicionado com sucesso!!!!')

});




module.exports = router;
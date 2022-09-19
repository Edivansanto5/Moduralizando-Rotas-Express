
const app = express();
app.use(express.json());

// criando a rota da barra
app.get('/',(req,res) => {
    res.send('App Online');
});

// criando a rota de curso
app.get('/cursos',(req,res) => {
    res.send('Lista de cursos');
});

// criando a rota para pegare dados de cursos
app.push('/cursos',(req,res) =>{
    const dadosCursos = req.body;
    console.log(dadosCursos);
    app.send('Curso adicionado com sucesso!!!!')

});

// criando o servidor 
app.linsten(3000,()=>{
    console.log('Servidor no rodando');
})
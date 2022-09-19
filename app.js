
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
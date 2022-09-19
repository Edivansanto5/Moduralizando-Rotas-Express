const router = require("./api");

const app = express();
app.use(express.json());



// criando o servidor 
app.linsten(3000,()=>{
    console.log('Servidor no rodando');
})
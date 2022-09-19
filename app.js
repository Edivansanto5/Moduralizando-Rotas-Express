const { sendfile } = require("express/lib/response");

const app = express();
app.use(express.json());

// criando a rota da barra
app.get('/',(req,res) => {
    res.send('App Online')
})
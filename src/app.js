import express from "express"
import db from "./config/dbConnect.js"
import livros from "./models/Livros.js"
import routes from "./routes/index.js"

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
    console.log('Conexão efetuada')
})

const app = express();

app.use(express.json())

routes(app);

//função que busca os testes pelo ID
function buscatestes(id){
    return testes.findIndex(teste => teste.id == id);
}
export default app
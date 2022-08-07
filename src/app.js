import express from "express"
import db from "./config/dbConnect.js"

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
    console.log('Conexão efetuada')
})

const app = express();

app.use(express.json())

const testes = [
    {id:1, "nome": "Gus"},
    {id:2, "nome": "Robin"}
]

app.get('/', (req, res) => {
    res.status(200).send('Grande dia!');
})

app.get('/testes', (req,res) =>{
    res.status(200).json(testes);
})

app.get('/testes/:id', (req,res) =>{
    let index = buscatestes(req.params.id);
    res.json(testes[index]);
})

app.post('/testes',(req,res)=>{
    testes.push(req.body);
    res.status(201).send('Funcionou caralho');
})

app.put('/testes/:id', (req,res)=>{
     let index = buscatestes(req.params.id);
     testes[index].nome = req.body.nome;
     res.json(testes);   
})

app.delete('/testes/:id', (req,res)=>{
    let index = buscatestes(req.params.id);
    testes.splice(index, 1);
    res.send(`Teste ${req.params.id} removido com sucesso`);   
})

//função que busca os testes pelo ID
function buscatestes(id){
    return testes.findIndex(teste => teste.id == id);
}
export default app
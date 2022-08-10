import mongoose from "mongoose";

const autoresSchema = new mongoose.Schema(
    {
        id: {type:String},
        nome: {type:String, required: true},
        nacionalidade:{type:String, required:true}
    },
    {
        vesionKey: false
    }
)
const autores = mongoose.model('autores', autoresSchema)


export default autores;

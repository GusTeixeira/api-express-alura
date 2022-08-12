import mongoose from "mongoose";    

const editorasSchema = new mongoose.Schema({
id: {type:String},
cnpj: {type:String, required: true},
nome_empresa: {type: String, required:true}
});

const editoras = mongoose.model('editoras', livrosSchema);

export default editoras;
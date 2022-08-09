import mongoose from "mongoose";    

const livrosSchema = new mongoose.Schema({
id: {type:String},
titulo:{type:String, required:true},
autor:{type:String},
editora:{type:String},
numeroPaginas:{type:Number}
});

const livros = mongoose.model('livros', livrosSchema);

export default livros;
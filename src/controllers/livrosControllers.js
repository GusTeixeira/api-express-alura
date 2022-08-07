import express from "express"
import livros from "../models/Livros.js";

class LivroController{

    static listarLivros = (req,res)=>{
        livros.find((err, livros) => {
            res.status(200).json(livros)
        })
    }

}

export default LivroController;
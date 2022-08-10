import express from "express"
import livros from "../models/Livros.js";

class LivroController{

    static listarLivros = (req,res)=>{
        livros.find()
            .populate('autor')
            .exec((err, livros) => {
            res.status(200).json(livros)
        })
    }

    static listarLivrosPorID = (req, res) =>{
        const id = req.params.id;

        livros.findById(id)
            .populate('autor', 'nome')
            .exec((err, livros)=>{
            if(err){
                res.status(400).send({message: `${err.message} - ID não encontrado`})
            } else {
                res.status(200).send(livros)
            }
        })
    }

    static cadastrarLivros = (req, res) =>{
        let livro = new livros(req.body);
        livro.save((err)=> {
            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar livro`})
            } else{
                res.status(201).send(livro.toJSON())
            }
        })
    }

    static atualizarLivros = (req, res) => {
        const id = req.params.id;
        livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(err){
                res.status(500).send({message: `${err.message} - falha ao atualizar`})
            } else{
                res.status(200).send({message: 'Atualizado com sucesso'})
            }
        })
    }

    static excluirLivros = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndDelete(id, (err) => {
            if(err){
                res.status(500).send({message: `${err.message} - falha ao excluir`})
            } else{
                res.status(200).send({message: 'Livro removido com sucesso'})
            }
        })

    }    

}

export default LivroController;
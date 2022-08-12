import express from "express"
import autores from "../models/Autores.js";

class AutorController{

    static listarAutores = (req,res)=>{
        autores.find((err, autores) => {
            res.status(200).json(autores)
        })
    }

    static listarAutoresPorID = (req, res) =>{
        const id = req.params.id;

        autores.findById(id, (err, autores)=>{
            if(err){
                res.status(400).send({message: `${err.message} - ID não encontrado`})
            } else {
                res.status(200).send(autores)
            }
        })
    }

    static cadastrarAutores = (req, res) =>{
        let autor = new autores(req.body);
        autor.save((err)=> {
            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar autor`})
            } else{
                res.status(201).send(autor.toJSON())
            }
        })
    }

    static atualizarAutores = (req, res) => {
        const id = req.params.id;
        autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(err){
                res.status(500).send({message: `${err.message} - falha ao atualizar`})
            } else{
                res.status(200).send({message: 'Atualizado com sucesso'})
            }
        })
    }

    static excluirAutores = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndDelete(id, (err) => {
            if(err){
                res.status(500).send({message: `${err.message} - falha ao excluir`})
            } else{
                res.status(200).send({message: 'Autor removido com sucesso'})
            }
        })

    }    

}

export default AutorController;
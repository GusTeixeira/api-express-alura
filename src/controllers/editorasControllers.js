import express from "express"
import editoras from "../models/Editoras.js";

class EditoraController{

    static listareditoras = (req,res)=>{
        editoras.find((err, editoras) => {
            res.status(200).json(editoras)
        })
    }

    static listareditorasPorID = (req, res) =>{
        const id = req.params.id;

        editoras.findById(id, (err, editoras)=>{
            if(err){
                res.status(400).send({message: `${err.message} - ID não encontrado`})
            } else {
                res.status(200).send(editoras)
            }
        })
    }

    static cadastrareditoras = (req, res) =>{
        let editora = new editoras(req.body);
        editora.save((err)=> {
            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar editora`})
            } else{
                res.status(201).send(editora.toJSON())
            }
        })
    }

    static atualizareditoras = (req, res) => {
        const id = req.params.id;
        editoras.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(err){
                res.status(500).send({message: `${err.message} - falha ao atualizar`})
            } else{
                res.status(200).send({message: 'Atualizado com sucesso'})
            }
        })
    }

    static excluireditoras = (req, res) => {
        const id = req.params.id;

        editoras.findByIdAndDelete(id, (err) => {
            if(err){
                res.status(500).send({message: `${err.message} - falha ao excluir`})
            } else{
                res.status(200).send({message: 'editora removido com sucesso'})
            }
        })

    }    

}

export default EditoraController;
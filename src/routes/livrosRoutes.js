import express from "express"
import LivroController from "../controllers/livrosControllers.js"

const router = express.Router();

router
    .get("/livros", LivroController.listarLivros)
    .get("/livros/busca/",LivroController.listarLivrosPorEditora)
    .get("/livros/:id", LivroController.listarLivrosPorID)
    .post("/livros", LivroController.cadastrarLivros)
    .put("/livros/:id", LivroController.atualizarLivros)
    .delete("/livros/:id", LivroController.excluirLivros)
    
export default router;

import express from "express"
import EditoraController from "../controllers/editorasControllers.js";
const router = express.Router();

router
    .get("/editoras", EditoraController.listarEditoras)
    .get("/editoras/:id", EditoraController.listarEditorasPorID)
    .post("/editoras", EditoraController.cadastrarEditoras)
    .put("/editoras/:id", EditoraController.atualizarEditoras)
    .delete("/editoras/:id", EditoraController.excluirEditoras)
    
export default router;
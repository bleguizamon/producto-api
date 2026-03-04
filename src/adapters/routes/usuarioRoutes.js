import { Router } from "express";
import {
    crearUsuario,
    obtenerUsuarios,
    obtenerUsuarioPorId,
    actualizarUsuario,
    eliminarUsuario
} from "../controllers/usuarioController.js";

const router = Router();

// Crear usuario
router.post("/", crearUsuario);

// Obtener todos
router.get("/", obtenerUsuarios);

// Obtener por id
router.get("/:id", obtenerUsuarioPorId);

// Actualizar
router.put("/:id", actualizarUsuario);

// Eliminar
router.delete("/:id", eliminarUsuario);

export default router;
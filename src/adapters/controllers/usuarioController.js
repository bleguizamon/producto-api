import usuarioService from "../../application/services/usuarioService.js";

export const crearUsuario = async (req, res) => {
  try {
    const usuario = await usuarioService.crear(req.body);
    res.status(201).json({
      message: "Usuario creado correctamente",
      data: usuario
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await usuarioService.listar();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const obtenerUsuarioPorId = async (req, res) => {
  try {
    const usuario = await usuarioService.obtenerPorId(req.params.id);
    if (!usuario) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.status(200).json(usuario);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const actualizarUsuario = async (req, res) => {
  try {
    const usuario = await usuarioService.actualizar(req.params.id, req.body);
    if (!usuario) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.status(200).json({
      message: "Usuario actualizado",
      data: usuario
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const eliminarUsuario = async (req, res) => {
  try {
    const resultado = await usuarioService.eliminar(req.params.id);
    if (!resultado) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.status(200).json({
      message: "Usuario eliminado correctamente"
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
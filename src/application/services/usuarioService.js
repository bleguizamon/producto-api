import {
  crearUsuario,
  obtenerUsuarios,
  obtenerUsuarioPorId,
  actualizarUsuario,
  eliminarUsuario
} from "../../domain/usecases/index.js";

const usuarioService = {

  async crear(data) {
    try {
      return await crearUsuario(data);
    } catch (error) {
      throw new Error(`Error al crear el usuario: ${error.message}`);
    }
  },

  async listar() {
    try {
      return await obtenerUsuarios();
    } catch (error) {
      throw new Error(`Error al obtener usuarios: ${error.message}`);
    }
  },

  async obtenerPorId(id) {
    try {
      return await obtenerUsuarioPorId(id);
    } catch (error) {
      throw new Error(`Error al obtener usuario: ${error.message}`);
    }
  },

  async actualizar(id, data) {
    try {
      return await actualizarUsuario(id, data);
    } catch (error) {
      throw new Error(`Error al actualizar usuario: ${error.message}`);
    }
  },

  async eliminar(id) {
    try {
      return await eliminarUsuario(id);
    } catch (error) {
      throw new Error(`Error al eliminar usuario: ${error.message}`);
    }
  },
};

export default usuarioService;
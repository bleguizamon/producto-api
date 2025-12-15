import { crearProducto, obtenerProductos, obtenerProductoPorId, actualizarProducto, eliminarProducto } from "../../domain/usecases/index.js";

const productoService = {
  async crear(data) {
    try {
      return await crearProducto(data);
    } catch (error) {
      throw new Error(`Error al crear el producto: ${error.message}`);
    }
  },

  async listar() {
    try {
      return await obtenerProductos();
    } catch (error) {
      throw new Error(`Error al obtener productos: ${error.message}`);
    }
  },

  async obtenerPorId(id) {
    try {
      return await obtenerProductoPorId(id);
    } catch (error) {
      throw new Error(`Error al obtener producto: ${error.message}`);
    }
  },

  async actualizar(id, data) {
    try {
      return await actualizarProducto(id, data);
    } catch (error) {
      throw new Error(`Error al actualizar producto: ${error.message}`);
    }
  },

  async eliminar(id) {
    try {
      return await eliminarProducto(id);
    } catch (error) {
      throw new Error(`Error al eliminar producto: ${error.message}`);
    }
  },
};

export default productoService;


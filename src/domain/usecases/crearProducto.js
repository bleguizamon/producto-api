import { ProductoRepository } from "../../adapters/repositories/productoRepository.js";

const productoRepository = new ProductoRepository();

export const crearProducto = async (data) => {
  // Aquí podrías validar reglas de negocio, por ejemplo:
  if (!data.descripcion || !data.nombre) {
    throw new Error("El nombre y descripción son obligatorios");
  }

  const nuevoProducto = await productoRepository.crearProducto(data);
  return nuevoProducto;
};


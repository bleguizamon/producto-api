import { ProductoRepository } from "../../adapters/repositories/productoRepository.js";
const productoRepository = new ProductoRepository();
export const obtenerProductoPorId = async (id) => {
  const producto = await productoRepository.obtenerProductoPorId(id);
  if (!producto) throw new Error("Producto no encontrado");
  return producto;
};


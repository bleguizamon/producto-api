import { ProductoRepository } from "../../adapters/repositories/productoRepository.js";
const productoRepository = new ProductoRepository();
export const obtenerProductos = async () => {
  const productos = await productoRepository.obtenerProductos();
  return productos;
};


import productoRepository from "../../adapters/repositories/productoRepository.js";

export default async function obtenerProductos() {
  return await productoRepository.obtenerTodos();
}

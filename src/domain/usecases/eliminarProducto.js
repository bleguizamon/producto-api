import productoRepository from "../../adapters/repositories/productoRepository.js";

export default async function eliminarProducto(id) {
  if (!id) {
    throw new Error("Debe proporcionar un id");
  }

  const producto = await productoRepository.obtenerPorId(id);

  if (!producto) {
    throw new Error("Producto no encontrado");
  }

  await productoRepository.eliminar(id);
  return true;
}

import productoRepository from "../../adapters/repositories/productoRepository.js";

export default async function actualizarProducto(id, data) {
  if (!id) {
    throw new Error("El id del producto es obligatorio");
  }

  if (data.precio != null && data.precio <= 0) {
    throw new Error("El precio debe ser mayor a 0");
  }

  const producto = await productoRepository.actualizar(id, data);

  if (!producto) {
    throw new Error("Producto no encontrado");
  }

  return producto;
}

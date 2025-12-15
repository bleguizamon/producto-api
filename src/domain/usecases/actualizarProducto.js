import { ProductoRepository } from "../../adapters/repositories/productoRepository.js";

const productoRepository = new ProductoRepository();

export const actualizarProducto = async (id, data) => {
  const productoActualizado = await productoRepository.actualizarProducto(id, data);
  if (!productoActualizado) throw new Error("No se pudo actualizar el producto");
  return productoActualizado;
};


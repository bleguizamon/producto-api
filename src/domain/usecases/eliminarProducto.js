import { ProductoRepository } from "../../adapters/repositories/productoRepository.js";
const productoRepository = new ProductoRepository();
export const eliminarProducto = async (id) => {
  const resultado = await productoRepository.eliminarProducto(id);
  if (!resultado) throw new Error("No se encontró el producto para eliminar");
  return { mensaje: "Producto eliminado correctamente" };
};


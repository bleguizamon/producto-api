import productoRepository from "../../adapters/repositories/productoRepository.js";
import Producto from "../entities/Producto.js";

export default async function crearProducto(data) {
  const { nombre, descripcion, precio } = data;

  if (!nombre || nombre.trim() === "") {
    throw new Error("El nombre del producto es obligatorio");
  }

  if (!descripcion || descripcion.trim() === "") {
    throw new Error("La descripción del producto es obligatoria");
  }

  if (precio == null || precio <= 0) {
    throw new Error("El precio debe ser un número mayor a 0");
  }

  const producto = new Producto(data);
  return await productoRepository.crear(producto);
}

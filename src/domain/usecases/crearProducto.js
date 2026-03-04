import productoRepository from "../../adapters/repositories/productoRepository.js";
import Producto from "../entities/Producto.js";

export default async function crearProducto(data) {
  const {
    usuarioId,
    nombre,
    descripcion,
    precio,
    stock,
    disponible
  } = data;

  if (!usuarioId) {
    throw new Error("El producto debe tener un usuario asociado");
  }

  if (!nombre || nombre.trim() === "") {
    throw new Error("El nombre del producto es obligatorio");
  }

  if (!descripcion || descripcion.trim() === "") {
    throw new Error("La descripción del producto es obligatoria");
  }

  if (precio == null || precio <= 0) {
    throw new Error("El precio debe ser mayor a 0");
  }

  if (stock == null || stock < 0) {
    throw new Error("El stock no puede ser negativo");
  }

  const producto = new Producto(data);
  return await productoRepository.crear(producto);
}
export default class Producto {
  constructor({
    id = null,
    nombre,
    descripcion,
    precio,
    stock,
    disponible,
    fechaCreacion,
    usuarioId
  }) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.stock = stock;
    this.disponible = disponible;
    this.fechaCreacion = fechaCreacion;
    this.usuarioId = usuarioId;
  }
}
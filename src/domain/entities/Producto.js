export default class Producto {
  constructor({ id = null, nombre, descripcion, precio }) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
  }
}

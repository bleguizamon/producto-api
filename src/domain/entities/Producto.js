export class Producto {
  constructor({ nombre, descripcion, precio }) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
  }

  actualizarDatos({ nombre, descripcion, precio }) {
    if (nombre) this.nombre = nombre;
    if (descripcion) this.descripcion = descripcion;
    if (precio) this.precio = precio;
  }
}


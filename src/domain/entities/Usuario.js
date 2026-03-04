export default class Usuario {
  constructor({
    id = null,
    nombre,
    email,
    edad,
    activo,
    fechaRegistro,
    salario,
    rol
  }) {
    this.id = id;
    this.nombre = nombre;
    this.email = email;
    this.edad = edad;
    this.activo = activo;
    this.fechaRegistro = fechaRegistro;
    this.salario = salario;
    this.rol = rol;
  }
}
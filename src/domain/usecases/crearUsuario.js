import usuarioRepository from "../../adapters/repositories/usuarioRepository.js";
import Usuario from "../entities/Usuario.js";

export default async function crearUsuario(data) {

  const { nombre, email, edad, salario } = data;

  if (!nombre || nombre.trim() === "") {
    throw new Error("El nombre es obligatorio");
  }

  if (!email || email.trim() === "") {
    throw new Error("El email es obligatorio");
  }

  if (edad == null || edad < 0) {
    throw new Error("Edad inválida");
  }

  if (salario == null || salario < 0) {
    throw new Error("Salario inválido");
  }

  const usuario = new Usuario(data);
  return await usuarioRepository.crear(usuario);
}
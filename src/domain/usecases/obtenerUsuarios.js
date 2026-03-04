import usuarioRepository from "../../adapters/repositories/usuarioRepository.js";

export default async function obtenerUsuarios() {
  return await usuarioRepository.obtenerTodos();
}
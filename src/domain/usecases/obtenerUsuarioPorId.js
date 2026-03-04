import usuarioRepository from "../../adapters/repositories/usuarioRepository.js";

export default async function obtenerUsuarioPorId(id) {
  if (!id) {
    throw new Error("Debe proporcionar un id");
  }

  const usuario = await usuarioRepository.obtenerPorId(id);

  if (!usuario) {
    throw new Error("Usuario no encontrado");
  }

  return usuario;
}
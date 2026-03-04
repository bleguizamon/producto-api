import usuarioRepository from "../../adapters/repositories/usuarioRepository.js";

export default async function eliminarUsuario(id) {
  if (!id) {
    throw new Error("Debe proporcionar un id");
  }

  const usuario = await usuarioRepository.obtenerPorId(id);

  if (!usuario) {
    throw new Error("Usuario no encontrado");
  }

  await usuarioRepository.eliminar(id);

  return true;
}
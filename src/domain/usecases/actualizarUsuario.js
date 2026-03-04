import usuarioRepository from "../../adapters/repositories/usuarioRepository.js";

export default async function actualizarUsuario(id, data) {
  if (!id) {
    throw new Error("El id del usuario es obligatorio");
  }

  if (data.salario != null && data.salario < 0) {
    throw new Error("El salario no puede ser negativo");
  }

  if (data.edad != null && data.edad < 0) {
    throw new Error("La edad no puede ser negativa");
  }

  const usuario = await usuarioRepository.actualizar(id, data);

  if (!usuario) {
    throw new Error("Usuario no encontrado");
  }

  return usuario;
}
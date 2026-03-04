import UsuarioModel from "../../infra/db/models/usuarioModel.js";

const usuarioRepository = {

  async crear(usuario) {
    const nuevoUsuario = await UsuarioModel.create({
      nombre: usuario.nombre,
      email: usuario.email,
      edad: usuario.edad,
      activo: usuario.activo,
      salario: usuario.salario,
      rol: usuario.rol
    });

    return mapUsuario(nuevoUsuario);
  },

  async obtenerTodos() {
    const usuarios = await UsuarioModel.find();
    return usuarios.map(mapUsuario);
  },

  async obtenerPorId(id) {
    const usuario = await UsuarioModel.findById(id);
    if (!usuario) return null;
    return mapUsuario(usuario);
  },

  async actualizar(id, data) {
    const usuarioActualizado = await UsuarioModel.findByIdAndUpdate(
      id,
      {
        nombre: data.nombre,
        email: data.email,
        edad: data.edad,
        activo: data.activo,
        salario: data.salario,
        rol: data.rol
      },
      { new: true }
    );

    if (!usuarioActualizado) return null;
    return mapUsuario(usuarioActualizado);
  },

  async eliminar(id) {
    await UsuarioModel.findByIdAndDelete(id);
    return true;
  },
};

function mapUsuario(u) {
  return {
    id: u._id.toString(),
    nombre: u.nombre,
    email: u.email,
    edad: u.edad,
    activo: u.activo,
    fechaRegistro: u.fechaRegistro,
    salario: u.salario,
    rol: u.rol
  };
}

export default usuarioRepository;
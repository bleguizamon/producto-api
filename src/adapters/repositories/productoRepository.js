import ProductoModel from "../../infra/db/models/productoModel.js";

const productoRepository = {

  async crear(producto) {
    const nuevoProducto = await ProductoModel.create({
      usuarioId: producto.usuarioId,
      nombre: producto.nombre,
      descripcion: producto.descripcion,
      precio: producto.precio,
      stock: producto.stock,
      disponible: producto.disponible
    });

    return mapProducto(nuevoProducto);
  },

  async obtenerTodos() {
    const productos = await ProductoModel.find();

    return productos.map(mapProducto);
  },

  async obtenerPorId(id) {
    const producto = await ProductoModel.findById(id);
    if (!producto) return null;
    return mapProducto(producto);
  },

  async actualizar(id, data) {
    const productoActualizado = await ProductoModel.findByIdAndUpdate(
      id,
      {
        usuarioId: data.usuarioId,
        nombre: data.nombre,
        descripcion: data.descripcion,
        precio: data.precio,
        stock: data.stock,
        disponible: data.disponible
      },
      { new: true }
    );

    if (!productoActualizado) return null;
    return mapProducto(productoActualizado);
  },

  async eliminar(id) {
    await ProductoModel.findByIdAndDelete(id);
    return true;
  },
};

function mapProducto(p) {
  return {
    id: p._id.toString(),
    usuarioId: p.usuarioId?.toString(),
    nombre: p.nombre,
    descripcion: p.descripcion,
    precio: p.precio,
    stock: p.stock,
    disponible: p.disponible,
    fechaCreacion: p.fechaCreacion,
  };
}

export default productoRepository;
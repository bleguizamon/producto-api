import ProductoModel from "../../infra/db/models/productoModel.js";

const productoRepository = {
  async crear(producto) {
    const nuevoProducto = await ProductoModel.create({
      nombre: producto.nombre,
      descripcion: producto.descripcion,
      precio: producto.precio,
    });

    return {
      id: nuevoProducto._id.toString(),
      nombre: nuevoProducto.nombre,
      descripcion: nuevoProducto.descripcion,
      precio: nuevoProducto.precio,
    };
  },

  async obtenerTodos() {
    const productos = await ProductoModel.find();

    return productos.map((p) => ({
      id: p._id.toString(),
      nombre: p.nombre,
      descripcion: p.descripcion,
      precio: p.precio,
    }));
  },

  async obtenerPorId(id) {
    const producto = await ProductoModel.findById(id);

    if (!producto) return null;

    return {
      id: producto._id.toString(),
      nombre: producto.nombre,
      descripcion: producto.descripcion,
      precio: producto.precio,
    };
  },

  async actualizar(id, data) {
    const productoActualizado = await ProductoModel.findByIdAndUpdate(
      id,
      {
        nombre: data.nombre,
        descripcion: data.descripcion,
        precio: data.precio,
      },
      { new: true }
    );

    if (!productoActualizado) return null;

    return {
      id: productoActualizado._id.toString(),
      nombre: productoActualizado.nombre,
      descripcion: productoActualizado.descripcion,
      precio: productoActualizado.precio,
    };
  },

  async eliminar(id) {
    await ProductoModel.findByIdAndDelete(id);
    return true;
  },
};

export default productoRepository;

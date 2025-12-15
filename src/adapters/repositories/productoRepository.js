import ProductoModel from "../../infra/db/models/productoModel.js";
import { Producto } from "../../domain/entities/Producto.js";

export class ProductoRepository {
  async crearProducto(data) {
    const producto = new Producto(data);
    const productoDB = new ProductoModel(producto);
    return await productoDB.save();
  }

  async obtenerProductos() {
    return await ProductoModel.find();
  }

  async obtenerProductoPorId(id) {
    return await ProductoModel.findById(id);
  }

  async actualizarProducto(id, data) {
    const productoActualizado = await ProductoModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    return productoActualizado;
  }

  async eliminarProducto(id) {
    return await ProductoModel.findByIdAndDelete(id);
  }
}


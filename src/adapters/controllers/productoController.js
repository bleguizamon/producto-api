import productoService from "../../application/services/productoService.js";

export const crearProducto = async (req, res) => {
    try {
        const producto = await productoService.crear(req.body);
        res.status(201).json({ message: "Producto creado correctamente", data: producto })
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const obtenerProductos = async (req, res) => {
  try {
    const productos = await productoService.listar();
    res.status(200).json(productos);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const obtenerProductoPorId = async (req, res) => {
  try {
    const producto = await productoService.obtenerPorId(req.params.id);
    if (!producto) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.status(200).json(producto);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const actualizarProducto = async (req, res) => {
  try {
    const producto = await productoService.actualizar(req.params.id, req.body);
    if (!producto) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.status(200).json({ message: "Producto actualizado", data: producto });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const eliminarProducto = async (req, res) => {
  try {
    const resultado = await productoService.eliminar(req.params.id);
    if (!resultado) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.status(200).json({ message: "Producto eliminado correctamente" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


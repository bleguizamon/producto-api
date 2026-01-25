import mongoose from "mongoose";

const productoSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: [true, "El nombre del producto es obligatorio"],
      trim: true,
      minlength: [2, "El nombre debe tener al menos 2 caracteres"],
      maxlength: [100, "El nombre no puede superar los 100 caracteres"],
    },
    descripcion: {
      type: String,
      required: [true, "La descripción del producto es obligatoria"],
      trim: true,
      minlength: [5, "La descripción debe tener al menos 5 caracteres"],
      maxlength: [255, "La descripción no puede superar los 255 caracteres"],
    },
    precio: {
      type: Number,
      required: [true, "El precio del producto es obligatorio"],
      min: [0.01, "El precio debe ser mayor a 0"],
    },
  },
  {
    versionKey: false,
    timestamps: true
  }
);

const ProductoModel = mongoose.model("Producto", productoSchema);

export default ProductoModel;

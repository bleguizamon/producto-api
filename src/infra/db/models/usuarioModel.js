import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: [true, "El nombre es obligatorio"],
      trim: true,
      minlength: [2, "El nombre debe tener al menos 2 caracteres"],
      maxlength: [100, "El nombre no puede superar los 100 caracteres"],
    },
    email: {
      type: String,
      required: [true, "El email es obligatorio"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Debe ser un email válido"],
    },
    edad: {
      type: Number,
      required: [true, "La edad es obligatoria"],
      min: [0, "La edad no puede ser negativa"],
    },
    activo: {
      type: Boolean,
      required: true,
      default: true,
    },
    fechaRegistro: {
      type: Date,
      required: true,
      default: Date.now,
    },
    salario: {
      type: Number,
      required: [true, "El salario es obligatorio"],
      min: [0, "El salario no puede ser negativo"],
    },
    rol: {
      type: String,
      required: true,
      enum: ["ADMIN", "CLIENTE", "VENDEDOR"],
      default: "CLIENTE",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const UsuarioModel = mongoose.model("Usuario", usuarioSchema);

export default UsuarioModel;
import { buildSchema } from "graphql";
import {
  crearProducto,
  obtenerProductos,
  obtenerProductoPorId,
  actualizarProducto,
  eliminarProducto,
} from "../../domain/usecases/index.js";

const schema = buildSchema(`
  type Producto {
    id: ID!
    nombre: String!
    descripcion: String!
    precio: Float!
  }

  input ProductoInput {
    nombre: String!
    descripcion: String!
    precio: Float!
  }

  type Query {
    obtenerProductos: [Producto]
    obtenerProductoPorId(id: ID!): Producto
  }

  type Mutation {
    crearProducto(input: ProductoInput!): Producto
    actualizarProducto(id: ID!, input: ProductoInput!): Producto
    eliminarProducto(id: ID!): Boolean
  }
`);

const root = {
  obtenerProductos: async () => {
    try {
      return await obtenerProductos();
    } catch (error) {
      throw new Error(error.message);
    }
  },

  obtenerProductoPorId: async ({ id }) => {
    try {
      return await obtenerProductoPorId(id);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  crearProducto: async ({ input }) => {
    try {
      return await crearProducto(input);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  actualizarProducto: async ({ id, input }) => {
    try {
      return await actualizarProducto(id, input);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  eliminarProducto: async ({ id }) => {
    try {
      return await eliminarProducto(id);
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

export { schema, root };

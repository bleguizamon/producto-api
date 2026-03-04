
import {
  crearProducto,
  obtenerProductos,
  obtenerProductoPorId,
  actualizarProducto,
  eliminarProducto,
  crearUsuario,
  obtenerUsuarios,
  obtenerUsuarioPorId,
  actualizarUsuario,
  eliminarUsuario
} from "../../domain/usecases/index.js";

export const typeDefs =`
  type Usuario {
    id: ID!
    nombre: String!
    email: String!
    edad: Int!
    activo: Boolean!
    fechaRegistro: String!
    salario: Float!
    rol: String!
  }

  type Producto {
    id: ID!
    nombre: String!
    descripcion: String!
    precio: Float!
    stock: Int!
    disponible: Boolean!
    fechaCreacion: String!
    usuarioId: ID!
  }

  input UsuarioInput {
    nombre: String!
    email: String!
    edad: Int!
    activo: Boolean
    salario: Float!
    rol: String
  }

  input ProductoInput {
    usuarioId: ID!
    nombre: String!
    descripcion: String!
    precio: Float!
    stock: Int!
    disponible: Boolean
  }

  type Query {
    obtenerProductos: [Producto]
    obtenerProductoPorId(id: ID!): Producto
    obtenerUsuarios: [Usuario]
    obtenerUsuarioPorId(id: ID!): Usuario
  }

  type Mutation {
    crearProducto(input: ProductoInput!): Producto
    actualizarProducto(id: ID!, input: ProductoInput!): Producto
    eliminarProducto(id: ID!): Boolean

    crearUsuario(input: UsuarioInput!): Usuario
    actualizarUsuario(id: ID!, input: UsuarioInput!): Usuario
    eliminarUsuario(id: ID!): Boolean
  }
`;

export const resolvers = {
  Query: {
    obtenerProductos: async () => await obtenerProductos(),
    obtenerProductoPorId: async (_, { id }) => await obtenerProductoPorId(id),
    obtenerUsuarios: async () => await obtenerUsuarios(),
    obtenerUsuarioPorId: async (_, { id }) => await obtenerUsuarioPorId(id),
  },

  Mutation: {
    crearProducto: async (_, { input }) => await crearProducto(input),
    actualizarProducto: async (_, { id, input }) =>
      await actualizarProducto(id, input),
    eliminarProducto: async (_, { id }) =>
      await eliminarProducto(id),

    crearUsuario: async (_, { input }) =>
      await crearUsuario(input),
    actualizarUsuario: async (_, { id, input }) =>
      await actualizarUsuario(id, input),
    eliminarUsuario: async (_, { id }) =>
      await eliminarUsuario(id),
  },
};
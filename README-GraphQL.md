📦 Producto API – GraphQL + MongoDB
Arquitectura Hexagonal – Node.js
📌 Descripción general

Este proyecto implementa una API para la gestión de productos utilizando GraphQL, Node.js, Express y MongoDB, siguiendo los principios de la arquitectura hexagonal (Ports & Adapters).

El objetivo es desacoplar la lógica de negocio de los frameworks y de la infraestructura, garantizando una aplicación mantenible, escalable y fácilmente testeable.

🧱 Arquitectura utilizada: Hexagonal

La arquitectura hexagonal divide la aplicación en capas bien definidas:

GraphQL / REST
      ↓
Application Services
      ↓
Domain (UseCases + Entities)
      ↓
Adapters (Repositories)
      ↓
Infrastructure (MongoDB, Mongoose)

Beneficios:

Separación clara de responsabilidades

Independencia de frameworks

Facilita pruebas unitarias

Permite cambiar la infraestructura sin afectar el dominio

🧩 Tecnologías utilizadas

Node.js (ES Modules)

Express

GraphQL (express-graphql)

MongoDB

Mongoose

Swagger (para rutas REST)

Helmet, CORS, Morgan

Arquitectura Hexagonal

📁 Estructura del proyecto
src/
│
├── domain/
│   ├── entities/
│   │   └── Producto.js
│   └── usecases/
│       ├── crearProducto.js
│       ├── obtenerProductos.js
│       ├── obtenerProductoPorId.js
│       ├── actualizarProducto.js
│       ├── eliminarProducto.js
│       └── index.js
│
├── application/
│   └── services/
│       └── productoService.js
│
├── adapters/
│   ├── repositories/
│   │   └── productoRepository.js
│   └── routes/
│       └── productoRoutes.js
│
├── infra/
│   ├── db/
│   │   └── models/
│   │       └── productoModel.js
│   └── graphql/
│       └── schema.js
│
├── config/
│   └── swagger.js
│
├── app.js
└── server.js

📦 Entidad principal: Producto
Producto {
  id: ID
  nombre: String
  descripcion: String
  precio: Number
}

🧠 Reglas de negocio

Las validaciones se implementan en los casos de uso, no en GraphQL:

El nombre es obligatorio

La descripción es obligatoria

El precio debe ser mayor a 0

No se puede actualizar o eliminar un producto inexistente

El modelo de MongoDB refuerza la integridad estructural de los datos.

🔌 GraphQL
Endpoint
http://localhost:3000/graphql

Tipos principales
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

🔄 Operaciones CRUD
Crear producto
mutation {
  crearProducto(input: {
    nombre: "Mouse gamer"
    descripcion: "Mouse RGB"
    precio: 80000
  }) {
    id
    nombre
  }
}

Obtener todos los productos
query {
  obtenerProductos {
    id
    nombre
    precio
  }
}

Obtener producto por ID
query {
  obtenerProductoPorId(id: "ID_AQUI") {
    nombre
    descripcion
    precio
  }
}

Actualizar producto
mutation {
  actualizarProducto(
    id: "ID_AQUI"
    input: {
      nombre: "Mouse gamer PRO"
      descripcion: "Mouse RGB inalámbrico"
      precio: 120000
    }
  ) {
    id
    nombre
  }
}

Eliminar producto
mutation {
  eliminarProducto(id: "ID_AQUI")
}

⚠️ Manejo de errores

Los errores se originan en el dominio y se propagan hasta GraphQL:

Ejemplo:

{
  "errors": [
    {
      "message": "El precio debe ser un número mayor a 0"
    }
  ],
  "data": null
}


Esto garantiza:

Mensajes claros al cliente

Centralización de reglas de negocio

Independencia del framework

🗄️ Persistencia

Base de datos: MongoDB

ORM: Mongoose

Mapeo de _id → id en el repositorio

Uso de timestamps y validaciones estructurales

🚀 Ejecución del proyecto
Instalar dependencias
npm install

Ejecutar servidor
npm start

Verificar estado
GET /health

📚 Documentación REST (opcional)

Swagger disponible en:

http://localhost:3000/api-docs

🧠 Conclusión

Este proyecto demuestra la aplicación práctica de GraphQL junto con arquitectura hexagonal, logrando una solución desacoplada, robusta y alineada con buenas prácticas de ingeniería de software.

La separación entre dominio, aplicación e infraestructura permite que la lógica de negocio sea independiente de frameworks y tecnologías específicas, facilitando su evolución y mantenimiento.
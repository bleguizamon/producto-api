import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Productos API",
      version: "1.0.0",
      description: "API REST para gestión de productos",
      contact: {
        name: "API Support",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Servidor de desarrollo",
      },
    ],
    components: {
      securitySchemes: {
        basicAuth: {
          type: "http",
          scheme: "basic",
          description: "Autenticación Basic Auth. Usa las credenciales configuradas en las variables de entorno BASIC_AUTH_USER y BASIC_AUTH_PASS",
        },
      },
      schemas: {
        Producto: {
          type: "object",
          required: ["nombre", "descripcion", "precio"],
          properties: {
            _id: {
              type: "string",
              description: "ID único del producto",
              example: "507f1f77bcf86cd799439011",
            },
            nombre: {
              type: "string",
              description: "Nombre del producto",
              example: "Martillo",
            },
            descripcion: {
              type: "string",
              description: "Descripción breve del producto",
              example: "Martillo de acero con mango de madera",
            },
            precio: {
              type: "number",
              description: "Precio del producto",
              example: 25.99,
            },
          },
        },
        Error: {
          type: "object",
          properties: {
            message: {
              type: "string",
              description: "Mensaje de error",
              example: "Error al procesar la solicitud",
            },
          },
        },
      },
    },
  },
  apis: ["./src/adapters/routes/*.js", "./src/app.js"],
};

export const swaggerSpec = swaggerJsdoc(options);


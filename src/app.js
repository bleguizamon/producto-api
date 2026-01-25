export default async function createApp() {
  // Importaciones dinámicas
  const express = (await import("express")).default;
  const helmet = (await import("helmet")).default;
  const morgan = (await import("morgan")).default;
  const bodyParser = (await import("body-parser")).default;
  const cookieParser = (await import("cookie-parser")).default;
  const cors = (await import("cors")).default;
  const swaggerUi = (await import("swagger-ui-express")).default;
  const { swaggerSpec } = await import("./config/swagger.js");

  //GraphQL
  const graphqlPkg = await import('express-graphql');
  const graphqlHTTP = graphqlPkg.graphqlHTTP;

  // Importa las rutas
  const productoRoutes = (await import("./adapters/routes/productoRoutes.js")).default;
  const { schema, root } = await import("./infra/graphql/schema.js");

  const app = express();

  app.use("/graphql",
    graphqlHTTP({
      schema: schema,
      rootValue: root,
      graphiql: true,
    })
  );


  //Middlewares de seguridad y utilidades
  app.use(helmet());
  app.use(cors());
  app.use(morgan("dev"));
  app.use(bodyParser.json());
  app.use(cookieParser());

  // Swagger UI - Sin seguridad para pruebas
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
    customCss: '.swagger-ui .topbar { display: none }',
    customSiteTitle: "Productos API Documentation"
  }));

  //Rutas base
  app.use("/api/productos", productoRoutes);

  app.get("/health", (req, res) => {
    res.json({
      status: "ok",
      environment: process.env.NODE_ENV || "development",
      message: "API Productos corriendo correctamente",
    });
  });

  //Manejo de rutas no encontradas
  app.use((req, res) => {
    res.status(404).json({ message: "Ruta no encontrada" });
  });

  //Manejo global de errores (opcional, pero pro)
  app.use((err, req, res, next) => {
    console.error("Error global:", err);
    res.status(500).json({ message: "Error interno del servidor" });
  });

  return app;
}



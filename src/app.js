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

  // Importa las rutas
  const productoRoutes = (await import("./adapters/routes/productoRoutes.js")).default;

  const app = express();

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

  /**
   * @swagger
   * /health:
   *   get:
   *     summary: Health check del servidor
   *     tags: [Health]
   *     responses:
   *       200:
   *         description: Servidor funcionando correctamente
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 status:
   *                   type: string
   *                   example: "ok"
   *                 environment:
   *                   type: string
   *                   example: "development"
   *                 message:
   *                   type: string
   *                   example: "API Productos corriendo correctamente"
   */
  //Health check
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



import dotenv from "dotenv";
import { connectDB } from "./src/infra/db/mongoose.js";
import createApp from "./src/app.js";
import productoRoutes from "./src/adapters/routes/productoRoutes.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

const startServer = async () => {
    await connectDB(MONGO_URI);
    const app = await createApp();

    app.use("/api/productos", productoRoutes);
    app.listen(PORT, () => {
        console.log('Server running on http://localhost:', PORT);
    });
};

startServer();

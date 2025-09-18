import express from "express";
import dotenv from "dotenv";
import coordinadorRoutes from "./routes/coordinadorRoutes.js";


dotenv.config();
const app = express();
app.use(express.json());

// Rutas
app.use("/coordinador", coordinadorRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server iniciado en puerto ${PORT}`);
});


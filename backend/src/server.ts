import express from "express";
import cors from "cors";
import usuariosRoutes from "./routes/usuarios.routes";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/usuarios", usuariosRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
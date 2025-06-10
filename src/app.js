//--------------------
// IMPORTS EXTERNOS
//--------------------
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import "dotenv/config";

//--------------------
// IMPORTS INTERNOS
//--------------------
import connectMongoDB from "./config/mongoose.config.js";
import usersRouter from "./routes/users.router.js";
import petsRouter from "./routes/pets.router.js";
import adoptionsRouter from "./routes/adoption.router.js";
import sessionsRouter from "./routes/sessions.router.js";
import mocksRouter from "./routes/mocks.router.js";


//--------------------
// CONFIGURACION INICIAL
//--------------------
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;
connectMongoDB();

//--------------------
// MIDDLEWARES
//--------------------
app.use(express.json());
app.use(cookieParser());

//--------------------
// RUTAS
//--------------------
app.get("/", (req, res) => {
	res.send("¡Hola! Bienvenida/o a Adopta-Amor 💖");
});
app.use("/api/users", usersRouter);
app.use("/api/pets", petsRouter);
app.use("/api/adoptions", adoptionsRouter);
app.use("/api/sessions", sessionsRouter);
app.use("/api/mocks", mocksRouter);

//--------------------
// LEVANTAR SERVIDOR
//--------------------
app.listen(PORT, () =>
	console.log(`Servidor iniciado en http://localhost:${PORT}`)
);

//--------------------
//
//--------------------

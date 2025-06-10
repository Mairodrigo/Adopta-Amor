import { Router } from "express";
import { generateMockPets } from "../utils/generateMockPets.js";
import { generateMockUsers } from "../utils/generateMockUsers.js";
import { insertMockData } from "../services/mockService.js";

const router = Router();

// Endpoint para generar y devolver 25 mascotas mock
router.get("/mockingpets", (req, res) => {
	const pets = generateMockPets(25);
	res.json(pets);
});

// Endpoint para generar y devolver 50 usuarios mock
router.get("/mockingusers", (req, res) => {
	const users = generateMockUsers(50);
	res.json(users);
});

// Endpoint para generar e insertar datos mock en la base de datos
// Recibe en el body la cantidad de usuarios y mascotas a insertar
router.post("/generateData", async (req, res) => {
	const { users = 10, pets = 10 } = req.body;
	try {
		// Servicio que inserta los datos mock en la base
		await insertMockData(users, pets);
		res.json({
			message: "Datos generados e insertados correctamente",
			inserted: {
				users,
				pets,
			},
		});
	} catch (error) {
		console.error("Error al generar detos mock", error);
		res.status(500).json({ error: "No se pudieron generar los datos mock" });
	}
});

export default router;

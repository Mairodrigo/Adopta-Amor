import { generateMockUsers } from "../utils/generateMockUsers.js";
import { generateMockPets } from "../utils/generateMockPets.js";
import Users from "../dao/models/User.js";
import Pets from "../dao/models/Pet.js";

// Función para generar e insertar datos mock en la base de datos
export async function insertMockData(userCount, petCount) {
	// Generar usuarios y mascotas mock
	const users = generateMockUsers(userCount);
	const pets = generateMockPets(petCount);

	try {
		// Insertar usuarios en la colección "users"
		await Users.insertMany(users);

		// Insertar mascotas en la colección "pets"
		await Pets.insertMany(pets);
	} catch (error) {
		throw new Error(`Error al insertar datos mock: ${error.message}`);
	}
}

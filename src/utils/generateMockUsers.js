import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt";

// Función que genera usuarios mock
export function generateMockUsers(count = 1) {
	const users = [];

	for (let i = 0; i < count; i++) {
		users.push({
			_id: faker.database.mongodbObjectId(), // ID simulado 
			name: faker.person.fullName(), // Nombre completo aleatorio
			email: faker.internet.email(), // Email aleatorio
			password: bcrypt.hashSync("coder123", 10), // Contraseña encriptada fija
			role: faker.helpers.arrayElement(["user", "admin"]), // Rol aleatorio
			pets: [], // Por defecto, array vacío de mascotas
		});
	}

	return users;
}

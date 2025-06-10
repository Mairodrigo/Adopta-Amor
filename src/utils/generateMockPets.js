import { faker } from "@faker-js/faker";

// Función para generar un array de mascotas mock
export function generateMockPets(count = 1) {
	const pets = [];

	for (let i = 0; i < count; i++) {
		pets.push({
			_id: faker.database.mongodbObjectId(), // ID simulado
			name: faker.animal.pet(), // Nombre de mascota
			species: faker.animal.type(), // Tipo de especie (perro, gato, etc.)
			age: faker.number.int({ min: 0, max: 20 }), // Edad aleatoria entre 0 y 20
		});
	}

	return pets;
}

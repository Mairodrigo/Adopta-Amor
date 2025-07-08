import {
	adoptionsService,
	petsService,
	usersService,
} from "../services/index.js";

const getAllAdoptions = async (req, res) => {
	const result = await adoptionsService.getAll();
	res.send({ status: "success", payload: result });
};

const getAdoption = async (req, res) => {
	const adoptionId = req.params.aid;
	const adoption = await adoptionsService.getBy({ _id: adoptionId });
	if (!adoption)
		return res
			.status(404)
			.send({ status: "error", error: "Adoption not found" });
	res.send({ status: "success", payload: adoption });
};

const createAdoption = async (req, res) => {
	const { userId, petId } = req.body;

	// Validación explícita para testear que falten datos
	if (!userId || !petId) {
		return res
			.status(400)
			.send({ status: "error", error: "userId y petId son obligatorios" });
	}

	const user = await usersService.getUserById(userId);
	if (!user)
		return res
			.status(404)
			.send({ status: "error", error: "Usuario no encontrado" });

	const pet = await petsService.getBy({ _id: petId });
	if (!pet)
		return res
			.status(404)
			.send({ status: "error", error: "Mascota no encontrada" });

	if (pet.adopted) {
		return res
			.status(400)
			.send({ status: "error", error: "La mascota ya fue adoptada" });
	}

	user.pets.push(pet._id);
	await usersService.update(user._id, { pets: user.pets });
	await petsService.update(pet._id, { adopted: true, owner: user._id });
	await adoptionsService.create({ owner: user._id, pet: pet._id });

	return res
		.status(201)
		.send({ status: "success", message: "Mascota adoptada" });
};

export default {
	createAdoption,
	getAllAdoptions,
	getAdoption,
};

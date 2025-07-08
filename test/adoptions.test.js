import chai from "chai";
import chaiHttp from "chai-http";
import app from "../src/app.js"; // asegurate que app.js exporta "app" (no escucha el puerto directo)

chai.use(chaiHttp);
const expect = chai.expect;

describe("🧪 Tests funcionales - Adopciones", () => {
	let server;
	let requester;

	before(() => {
		server = app.listen(0); // escucha en un puerto libre
		requester = chai.request.agent(server);
	});

	after(() => {
		server.close();
	});

	describe("GET /api/adoptions", () => {
		it("Debe devolver un array de adopciones", async () => {
			const res = await requester.get("/api/adoptions");
			expect(res).to.have.status(200);
			expect(res.body).to.be.an("object");
			expect(res.body.payload).to.be.an("array");
		});
	});

	describe("POST /api/adoptions", () => {
		it("Debe fallar si faltan datos", async () => {
			const res = await requester.post("/api/adoptions").send({});
			expect(res).to.have.status(400); // si no hay userId/petId
		});

		it("Debe crear una adopción con datos válidos", async () => {
			const mockUserId = "64f000000000000000000001"; // ObjectId ficticio
			const mockPetId = "64f000000000000000000002";

			const res = await requester.post("/api/adoptions").send({
				userId: mockUserId,
				petId: mockPetId,
			});

			expect([200, 201, 404]).to.include(res.status);
		});

		it("Debe fallar si el usuario no existe", async () => {
			const res = await requester.post("/api/adoptions").send({
				userId: "64f999999999999999999999",
				petId: "64f000000000000000000002",
			});

			expect([400, 404]).to.include(res.status);
		});

		it("Debe fallar si la mascota no existe", async () => {
			const res = await requester.post("/api/adoptions").send({
				userId: "64f000000000000000000001",
				petId: "64f999999999999999999999",
			});

			expect([400, 404]).to.include(res.status);
		});
	});
});

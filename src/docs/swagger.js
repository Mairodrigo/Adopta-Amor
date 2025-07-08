import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions = {
	definition: {
		openapi: "3.1.0",
		info: {
			title: "Adopta-Amor API",
			version: "1.0.0",
			description: "Documentación de la API de adopción de mascotas",
		},
	},
	apis: ["./src/routes/*.js"], // Asegurate que tus routers estén en src/routes/
};

export const swaggerSpecs = swaggerJSDoc(swaggerOptions);

import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions = {
	definition: {
		openapi: "3.1.0",
		info: {
			title: "Adopta-Amor API",
			version: "1.0.0",
			description: "Documentación de la API de adopción de mascotas",
		},
		components: {
			schemas: {
				User: {
					type: "object",
					properties: {
						_id: {
							type: "string",
							description: "ID único del usuario",
							example: "64b0c9eecf1f9e2e98d56789",
						},
						name: {
							type: "string",
							example: "Juan Pérez",
						},
						email: {
							type: "string",
							example: "juan@example.com",
						},
						role: {
							type: "string",
							enum: ["user", "admin"],
							example: "user",
						},
						pets: {
							type: "array",
							items: {
								type: "string",
							},
							example: ["64b0c9eecf1f9e2e98d11111"],
						},
					},
				},
			},
		},
	},
	apis: ["./src/routes/*.js"],
};

export const swaggerSpecs = swaggerJSDoc(swaggerOptions);

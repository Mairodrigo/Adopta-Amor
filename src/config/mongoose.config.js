import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
	throw new Error("Falta definir MONGO_URI en el archivo .env");
}

const connectMongoDB = async () => {
	try {
        mongoose.set("strictQuery", false);
		await mongoose.connect(mongoURI);
		console.log(`🟢 Conectado a MongoDB: ${mongoose.connection.name}`);
	} catch (error) {
		console.error("❌ Error al conectar con MongoDB:", error.message);
		process.exit(1);
	}
};

export default connectMongoDB;

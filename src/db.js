import pg from "pg";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Create a connection pool to the database
const pool = new pg.Pool({
	port: process.env.DB_PORT || 5432,
	host: process.env.DB_HOST || "localhost",
	user: process.env.DB_USER || "defaultUser",
	password: process.env.DB_PASSWORD || "defaultPassword",
	database: process.env.DB_NAME || "defaultDb",
	max: 20,
	idleTimeoutMillis: 30000,
	connectionTimeoutMillis: 2000,
});

pool.on("connect", () => {
	console.log("Connected to the database");
});

pool.on("error", (err) => {
	console.error("Unexpected error on idle client", err);
	process.exit(-1);
});

export default pool;

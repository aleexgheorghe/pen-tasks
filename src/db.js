import pg from "pg";

const pool = new pg.Pool({
	port: 5432,
	host: "localhost",
	user: "alex",
	password: "T3stPassw0rd",
	database: "tasksdb",
});

pool.on("connect", () => {
	console.log("Connected to the database");
});

export default pool;

import app from "./app.js";
import pool from "./db.js";

app.listen(3000, () => {
	console.log("Server is listening on port 3000");
});

import pool from "../db.js";

export const getAllTasks = async (req, res, next) => {
	const result = await pool.query("SELECT * FROM task");
	console.log(result);
	res.json(result.rows);
};

export const getTask = (req, res) => {
	res.send("Getting task");
};

export const createTask = async (req, res, next) => {
	const { title, description } = req.body;

	try {
		const result = await pool.query(
			"INSERT INTO task (title, description) VALUES ($1, $2) RETURNING *",
			[title, description]
		);

		res.json(result.rows[0]);
	} catch (error) {
		if (error.code === "23505") {
			return res.status(409).send("Task already exists");
		}

		return next(error);
	}
};

export const updateTask = (req, res) => {
	res.send("Updating task");
};

export const deleteTask = (req, res) => {
	res.send("Deleting task");
};

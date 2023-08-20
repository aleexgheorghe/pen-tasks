import pool from "../db.js";

export const getAllTasks = async (req, res, next) => {
    try {
        const result = await pool.query("SELECT * FROM task");
        res.json(result.rows);
    } catch (error) {
        next(error);
    }
};

export const getTask = async (req, res, next) => {
    try {
        const result = await pool.query("SELECT * FROM task WHERE id = $1", [req.params.id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
};

export const createTask = async (req, res, next) => {
    const { title, description } = req.body;

    try {
        const result = await pool.query(
            "INSERT INTO task (title, description) VALUES ($1, $2) RETURNING *",
            [title, description]
        );

        res.status(201).json(result.rows[0]);
    } catch (error) {
        if (error.code === "23505") {
            return res.status(409).json({ message: "Task already exists" });
        }

        next(error);
    }
};

export const updateTask = async (req, res, next) => {
    const { title, description } = req.body;

    try {
        const result = await pool.query(
            "UPDATE task SET title = $1, description = $2 WHERE id = $3 RETURNING *",
            [title, description, req.params.id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
};

export const deleteTask = async (req, res, next) => {
    try {
        const result = await pool.query("DELETE FROM task WHERE id = $1", [req.params.id]);

        if (result.rowCount === 0) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(204).end(); // 204 status indicates a successful request with no additional content to send in the response.
    } catch (error) {
        next(error);
    }
};

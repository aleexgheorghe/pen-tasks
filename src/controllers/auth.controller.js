import bcrypt from "bcrypt";
import pool from "../db.js";

export const signin = (req, res) => {
	res.send("Signing in");
};

export const signup = async (req, res, next) => {
	try {
		const { name, email, password } = req.body;

		if (!name || !email || !password) {
			return res.status(400).json({ message: "All fields are required" });
		}

		const hashPassword = await bcrypt.hash(password, 10);

		await pool.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)', [name, email, hashPassword]);

		return res.status(201).json({
			message: "Signup success",
		});
	} catch (error) {
		if (error.code === '23505') {
			return res.status(400).json({
				message: "Email already registered",
			});
		}
		next(error);
	}
};
export const signout = (req, res) => {
	res.send("Logging out");
};

export const getProfile = (req, res) => {
	res.send("Getting profile");
};

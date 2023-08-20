import bcrypt from "bcrypt";
import pool from "../db.js";
import { createAccessToken } from "../libs/jwt.js";
import md5 from "md5";

export const signin = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const result = await pool.query('SELECT id, password FROM users WHERE email = $1', [email]);

    if (result.rows.length === 0) {
        return res.status(400).json({ message: "Invalid credentials" });
    }

    const validPassword = await bcrypt.compare(password, result.rows[0].password);

    if (!validPassword) {
        return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = await createAccessToken({id: result.rows[0].id});

    res.cookie("token", token, {
        httpOnly: true,
        //secure: process.env.NODE_ENV === "production", // use the secure flag in production
        //sameSite: "strict",
        maxAge: 3600000,
    });

    return res.status(200).json({
        user: {
            id: result.rows[0].id
        },
        message: "User logged in successfully",
    });
};

export const signup = async (req, res, next) => {
	try {
		const { name, email, password } = req.body;

		if (!name || !email || !password) {
			return res.status(400).json({ message: "All fields are required" });
		}

		const hashPassword = await bcrypt.hash(password, 10);
		const gravatarUrl = "https://gravatar.com/avatar/" + md5(email.trim().toLowerCase()) + "?s=200&d=retro";

		const result = await pool.query('INSERT INTO users (name, email, password, gravatar) VALUES ($1, $2, $3, $4) RETURNING *', [name, email, hashPassword, gravatarUrl]);

		const token = await createAccessToken({id: result.rows[0].id});

		res.cookie("token", token, {
			httpOnly: true,
			//secure: process.env.NODE_ENV === "production",
			//sameSite: "strict",
			maxAge: 3600000,
		});

		return res.status(201).json({
			user: {
				id: result.rows[0].id,
				name: result.rows[0].name,
				email: result.rows[0].email,
				gravatar: result.rows[0].gravatar
			},
			message: "User created successfully",
		});
	} catch (error) {
		// Unique violation for PostgreSQL, indicating duplicate email
		const UNIQUE_VIOLATION = '23505'; 
		if (error.code === UNIQUE_VIOLATION) {
			return res.status(400).json({
				message: "Email already registered",
			});
		}
		next(error);
	}
};

export const signout = (req, res) => {
    const cookieOptions = {
        httpOnly: true,
        // secure: process.env.NODE_ENV === "production", // use the secure flag in production
        // sameSite: "strict" // helps to prevent CSRF
    };
    
    res.clearCookie("token", cookieOptions);

    return res.status(200).json({
        message: "User logged out successfully",
    });
};

export const getProfile = async(req, res) => {
	const result = await pool.query('SELECT * FROM users WHERE id = $1', [req.userId]);

	return res.status(200).json({
		result: result.rows[0],
		message: "User profile retrieved successfully",
	});

};

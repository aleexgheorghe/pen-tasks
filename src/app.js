import express from "express";
import morgan from "morgan";
import taskRoutes from "./routes/tasks.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();
const apiVersion = "/api/v1";

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes

app.get("/", (req, res) => {
	res.json({ message: "Hello, world!" });
});

app.use(`${apiVersion}`, taskRoutes);
app.use(`${apiVersion}`, authRoutes);

// Error handler
app.use((err, req, res, next) => {
	res.status(500).json({
		status: "error",
		message: err.message,
	});
});

export default app;

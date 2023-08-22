import express from "express";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import cors from "cors";

import taskRoutes from "./routes/tasks.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();
const apiVersion = "/api/v1";

// Security: Set various HTTP headers for security
app.use(helmet());

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(limiter);

// Middlewares
app.use(cors({
	origin: "http://localhost:5173",
	credentials: true,
}));
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Default Route
app.get("/", (req, res) => {
	res.json({ message: "Hello, world!" });
});

// Routes
app.use(`${apiVersion}/tasks`, taskRoutes);
app.use(`${apiVersion}/auth`, authRoutes);

// Catch-All Route
app.all('*', (req, res, next) => {
	const err = new Error(`Can't find ${req.originalUrl} on this server!`);
	err.status = 'fail';
	err.statusCode = 404;
	next(err);
  });

// Error handler
app.use((err, req, res, next) => {
	res.status(err.statusCode || 500).json({
		status: err.status || "error",
		message: err.message,
	});
});

export default app;

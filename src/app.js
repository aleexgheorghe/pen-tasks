import express from "express";
import morgan from "morgan";

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.get("/", (req, res) => {
	  res.json({message: "Hello, world!"});
});

// Error handler
app.use((err, req, res, next) => {
	  res.status(500).json({
			status: "error",
			message: err.message
	  });
});

export default app;

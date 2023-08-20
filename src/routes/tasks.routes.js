import Router from "express-promise-router";
import {
	getAllTasks,
	createTask,
	getTask,
	updateTask,
	deleteTask,
} from "../controllers/tasks.controller.js";

const router = Router();

// Routes
router.get("/tasks", getAllTasks);

router.post("/tasks", createTask);

router.get("/tasks/:id", getTask);

router.put("/tasks/:id", updateTask);

router.delete("/tasks/:id", deleteTask);

export default router;

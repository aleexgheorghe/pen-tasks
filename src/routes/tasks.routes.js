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
router.get("/", getAllTasks);

router.post("/", createTask);

router.get("/:id", getTask);

router.put("/:id", updateTask);

router.delete("/:id", deleteTask);

export default router;

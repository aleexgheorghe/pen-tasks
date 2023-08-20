import Router from "express-promise-router";
import { isAuth } from "../middlewares/auth.middleware.js";
import {
	getAllTasks,
	createTask,
	getTask,
	updateTask,
	deleteTask,
} from "../controllers/tasks.controller.js";

const router = Router();

// Routes
router.get("/", isAuth, getAllTasks);

router.post("/", isAuth, createTask);

router.get("/:id", isAuth, getTask);

router.put("/:id", isAuth, updateTask);

router.delete("/:id", isAuth, deleteTask);

export default router;

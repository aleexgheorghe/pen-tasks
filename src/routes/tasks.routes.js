import Router from "express-promise-router";
import { isAuth } from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/validate.middleware.js";
import { createTaskSchema, updateTaskSchema } from "../schemas/task.schemas.js";
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

router.post("/", isAuth, validateSchema(createTaskSchema), createTask);

router.get("/:id", isAuth, getTask);

router.put("/:id", isAuth, validateSchema(updateTaskSchema), updateTask);

router.delete("/:id", isAuth, deleteTask);

export default router;

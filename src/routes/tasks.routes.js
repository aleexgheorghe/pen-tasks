import {Router} from "express";

const router = Router();

// Routes
router.get("/tasks", (req, res) => {
	  res.send("Getting tasks");
});

router.get("/tasks/:id", (req, res) => {
	res.send("Getting task");
});

router.post("/tasks", (req, res) => {
	res.send("Creating task");
});

router.put("/tasks/:id", (req, res) => {
	res.send("Updating task");
});

router.get("/tasks/:id", (req, res) => {
	res.send("Deleting task");
});

export default router;

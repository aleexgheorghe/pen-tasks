import { Router } from "express";

const router = Router();

// Routes
router.post("/signup", (req, res) => {
	res.send("Signing up");
});

router.post("/signin", (req, res) => {
	res.send("Signing in");
});

router.post("/signout", (req, res) => {
	res.send("Logging out");
});

router.get("/profile", (req, res) => {
	res.send("Getting profile");
});

export default router;

import Router from "express-promise-router";
import { isAuth } from "../middlewares/auth.middleware.js";
import {
	signin,
	signup,
	signout,
	getProfile,
} from "../controllers/auth.controller.js";

const router = Router();

// Routes 
router.post("/signup", signup);

router.post("/signin", signin);

router.get("/signout", signout);

router.get("/profile", isAuth, getProfile);

export default router;
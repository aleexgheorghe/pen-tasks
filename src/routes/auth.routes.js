import Router from "express-promise-router";
import { isAuth } from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/validate.middleware.js";
import { signupSchema, signinSchema} from "../schemas/auth.schemas.js";
import {
	signin,
	signup,
	signout,
	getProfile,
} from "../controllers/auth.controller.js";

const router = Router();

// Routes 
router.post("/signup", validateSchema(signupSchema), signup);

router.post("/signin", validateSchema(signinSchema), signin);

router.post("/signout", signout);

router.get("/profile", isAuth, getProfile);

export default router;
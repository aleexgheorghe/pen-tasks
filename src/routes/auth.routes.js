import { Router } from "express";
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

router.get("/profile", getProfile);

export default router;

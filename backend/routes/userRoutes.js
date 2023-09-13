import express from "express";
import {
  authUser,
  registerUser,
  getSingleProfile,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMidlleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", authUser);
router.get("/:id", protect, getSingleProfile);

export default router;

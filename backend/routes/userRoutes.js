import express from "express";
import {
  authUser,
  registerUser,
  getSingleProfile,
  updateProfileName,
  updateProfileImage,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMidlleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", authUser);
router.get("/:id", protect, getSingleProfile);
router.put("/name", protect, updateProfileName);
router.put("/image", protect, updateProfileImage);

export default router;

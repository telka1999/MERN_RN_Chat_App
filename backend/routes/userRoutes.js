import express from "express";
import {
  authUser,
  registerUser,
  getSingleProfile,
  updateProfileName,
  updateProfileImage,
  getAllProfile,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMidlleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", authUser);
router.get("/:id", protect, getSingleProfile);
router.get("/all/:id", protect, getAllProfile);
router.put("/name", protect, updateProfileName);
router.put("/image", protect, updateProfileImage);

export default router;

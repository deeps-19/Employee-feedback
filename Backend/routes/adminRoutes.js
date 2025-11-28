import express from "express";
import { adminLogin, createAdmin } from "../controllers/adminController.js";

const router = express.Router();

router.post("/login", adminLogin);
router.post("/register", createAdmin); // use once

export default router;

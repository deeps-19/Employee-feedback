import express from "express";
import { submitFeedback, getFeedback } from "../controllers/feedbackController.js";
import { adminAuth } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", submitFeedback);
router.get("/", adminAuth, getFeedback);

export default router;

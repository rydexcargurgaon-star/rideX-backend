import express from "express";
import { sendMail } from "../controllers/sendMail.js";
const router = express.Router();
router.post("/sendMail", sendMail);
export { router as mailRoutes };

import express from "express";
import { mailRoutes } from "./mailRoutes.js";
const app = express.Router();

app.use("/mail", mailRoutes);

export default app;

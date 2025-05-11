import express from "express";
import { createPenalty } from "../controllers/penaltyControllers/createPenalty";
import { updateStatus } from "../controllers/penaltyControllers/updateStatus";
export const penaltyRoute = express.Router();
penaltyRoute.post("/add", createPenalty);
penaltyRoute.get("/update", updateStatus);

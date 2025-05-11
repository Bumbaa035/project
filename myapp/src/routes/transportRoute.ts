import express from "express";
import { addTransport } from "../controllers/transportControllers/addTransport";
import { updateTransportStatus } from "../controllers/transportControllers/updateTransportStatus";
export const transportRoute = express.Router();
transportRoute.post("/", addTransport);
transportRoute.put("/", updateTransportStatus);

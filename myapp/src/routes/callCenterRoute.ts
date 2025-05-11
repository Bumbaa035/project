import express from "express";
import { login } from "../controllers/authControllerCenter/login";
import { callCenterExist } from "../middleware/callCenterExist";
import { getCurrent } from "../controllers/authControllerCenter/getCurrent";

export const callCenterRoute = express.Router();

callCenterRoute.post("/login", callCenterExist, login);
// callCenterRoute.get("/current/:id", getCurrent);

import express from "express";
import { carExist } from "../middleware/carExist";
import { addCar } from "../controllers/carControllers/addCar";
import { getCurrentCar } from "../controllers/carControllers/getCurrentCar";
export const carRoute = express.Router();
carRoute.post("/add", carExist, addCar);
carRoute.get("/get", getCurrentCar);

import express from "express";
import { login } from "../controllers/authControllerDriver/login";
import { userExist } from "../middleware/userExist";
import { signUp } from "../controllers/authControllerDriver/signUp";

export const authRouter = express.Router();

authRouter.post("/login", userExist, login);
authRouter.post("/signUp", signUp);

export default authRouter;

import express from "express";
import { login } from "../controllers/authControllerDriver/login";
import { userExist } from "../middleware/userExist";
import { signUp } from "../controllers/authControllerDriver/signUp";
import { userNotExist } from "../middleware/userNotExist";

export const authRouter = express.Router();

authRouter.post("/login", userExist, login);
authRouter.post("/signUp", userNotExist, signUp);

export default authRouter;

import express from "express";
import { login } from "../controllers/authController/login";
import { userExist } from "../middleware/userExist";
import { addPass } from "../middleware/addPass";
import { signUp } from "../controllers/authController/signUp";
import { userNotExist } from "../middleware/userNotExist";

export const authRouter = express.Router();

authRouter.post("/login", userExist, addPass, login);
authRouter.post("/signUp", userNotExist, signUp);

export default authRouter;

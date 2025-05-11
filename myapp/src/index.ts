import express from "express";
import { authRouter } from "./routes/authRoute";
import cors from "cors";
import { carRoute } from "./routes/carRoute";
import { transportRoute } from "./routes/transportRoute";
import { callCenterRoute } from "./routes/callCenterRoute";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = 3300;
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/auth", authRouter);
app.use("/car", carRoute);
app.use("/transport", transportRoute);
app.use("/call-center", callCenterRoute);
app.listen(3300, "0.0.0.0", () => {
  console.log("Server running on port 3300");
});

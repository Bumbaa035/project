import express from "express";
import { authRouter } from "./routes/authRoute";
import cors from "cors";
import { carRoute } from "./routes/carRoute";
import { transportRoute } from "./routes/transportRoute";
import { callCenterRoute } from "./routes/callCenterRoute";
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
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


import "dotenv/config";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import { corsOptions } from "./cors.js";

import testRoutes from "./routes/testRoutes.js";

const app = express();

app.use(morgan("tiny"));
app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/test", testRoutes);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err: any, req: any, res: any, next: any) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

export default app;
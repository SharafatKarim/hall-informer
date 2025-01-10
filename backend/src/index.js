import express from "express";
import authRoutes from "./routes/auth.routes.js";
import studentRoutes from "./routes/student.routes.js";
import cookieParser from "cookie-parser";

import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import cors from "cors";
import path from "path";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

app.use(express.json({ limit: "1mb" }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use("/api/auth", authRoutes);
app.use("/api/student", studentRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log("Server is running on PORT:", PORT);
  connectDB();
});

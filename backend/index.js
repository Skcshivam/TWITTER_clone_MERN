import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./config/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import tweetRoute from "./routes/tweetRoute.js";
import path from "path";
import cors from "cors";

dotenv.config();
databaseConnection();

const app = express();

const _dirname = path.resolve();

//middleware
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
  origin: "https://twitter-clone-mern-fa2s.onrender.com",
  credentials: true, // Allow credentials (cookies, authorization headers)

  extended: true,
};
app.use(cors(corsOptions));

//api
app.use("/api/v1/user", userRoute);
app.use("/api/v1/tweet", tweetRoute);

app.use(express.static(path.join(_dirname, "/frontend/build")));
app.get("*", (_, res) => {
  res.sendFile(path.resolve(_dirname, "frontend", "build", "index.html"));
});

// app.get("/home", (req, res) => {
//   res.status(200).json({
//     message: "fetch from backend",
//   });
// });

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});

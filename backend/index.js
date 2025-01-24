import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./config/database.js";

dotenv.config();

databaseConnection();
const app = express();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});

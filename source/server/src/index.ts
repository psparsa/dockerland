import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env?.APP_PORT ?? 4444;

app.get("/", (_, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log("server listening on port: " + PORT);
});

import express from "express";

const app = express();
const PORT = 4444;

app.get("/", (_, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log("server listening on port: " + PORT);
});

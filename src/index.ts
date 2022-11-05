import express from 'express';
import config from "src/config";

const app = express();
const port = config.port;

app.get("/", async (req, res) => {

  res.send("");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

import express from 'express';

const app = express();
const port = process.env.PORT;

app.get("/", async (req, res) => {
  res.send("Hello world!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

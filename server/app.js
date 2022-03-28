const express = require("express");

const app = express()
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("hi from server");
});

app.listen(PORT, () => {
  console.log(`Started Express server on port ${PORT}`);
});

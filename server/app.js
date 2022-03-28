const express = require("express");
const cors = require("cors")
const app = express()
const PORT = 3000;
const {productRoutes} = require("./controllers/products.js")

app.use(cors())

app.get("/", (req, res) => {
  res.send("hi from server");
});

app.use("/products", productRoutes)

app.listen(PORT, () => {
  console.log(`Started Express server on port ${PORT}`);
});

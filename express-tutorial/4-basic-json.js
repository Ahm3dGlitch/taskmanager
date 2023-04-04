const express = require("express");
const app = express();
const { products } = require("./data");

app.listen(5000, () => {
  console.log("server is listening to port 5000 ......");
});

app.get("/", (req, res) => {
  res.json(products);
});

app.all("*", (req, res) => {
  res.status(404).send("resourcse not found");
});

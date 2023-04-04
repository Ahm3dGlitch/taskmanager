const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./auth");
const morgan = require('morgan')

app.listen(5000, () => {
  console.log("server is listening to port 5000 ......");
});

app.use(morgan('tiny'));
app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});
app.get("/api/products", (req, res) => {
  res.send("Products");
});
app.get("/api/items", (req, res) => {
  res.send("Items");
  console.log(req.user);
});

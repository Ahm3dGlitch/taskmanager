const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("./public"));
app.listen(5000, () => {
  console.log("server is listening to port 5000 ......");
});

app.all("*", (req, res) => {
  res.status(404).send("resourcse not found");
});

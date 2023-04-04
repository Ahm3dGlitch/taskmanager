const app = require("express")();

app.listen(5000, () => {
  console.log("server is created");
});

app.get("/", (req, res) => {
  console.log("user hit the resource");
  res.status(200).send("Home Page");
});

app.get("/about", (req, res) => {
  res.status(200).send("About page");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>resoursce not found</h1>");
});

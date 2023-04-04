const express = require("express");
const app = express();

//static assets
app.use(express.static("./methods-public"));
//parse form data
app.use(express.urlencoded({ extended: false }));
//parse json
app.use(express.json());

const people = require("./routes/people");
const auth = require("./routes/auth");

app.use("api/people", people);
app.use("/login", auth);

app.listen(5000, () => {
  console.log("server is listening to port 5000 ......");
});

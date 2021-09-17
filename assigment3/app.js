const express = require("express");
const app = express();
const path = require("path");
const homeRoute = require("./routes/home");
const userRoute = require("./routes/user");
app.use(express.static(path.join(__dirname, "puplic")));
app.use(userRoute);
app.use(homeRoute);

app.use((req, res, next) => {
  res.status(404).send("<h1> 404 page not found </h1>");
});
app.listen(3000, () => {
  console.log("running successfully on port 3000 !");
});

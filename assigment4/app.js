const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const index = require("./routes/index");
const path = require("path");
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", "views");

app.use(index.routes);
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});

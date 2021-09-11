const http = require("http");
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const bodyParser = require("body-parser");
const path = require("path");
// global.rootDir = path.join(__dirname);
// const rootDir = require("../util/path");

//1. after we install express , we need to import it
const express = require("express");
// 2. we need to intialise it as object
const app = express();
app.set("view engine", "pug");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "puplic")));
app.use("/admin", adminData.routes);

app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});
// const server = http.createServer(app);
// server.listen(3000);
// it is shortcut instead of require http, create server.
app.listen(3000);

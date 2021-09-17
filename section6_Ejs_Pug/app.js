const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const bodyParser = require("body-parser");
const path = require("path");
const express_Handlebars = require("express-handlebars");

const express = require("express");

const app = express();
// app.set("view engine", "pug");
app.use(bodyParser.urlencoded({ extended: true }));
// app.engine(
//   "hbs",
//   express_Handlebars({
//     defaultLayout: "main-layout",
//     extname: "hbs",
//     layoutsDir: "views/layout/",
//   })
// );
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static(path.join(__dirname, "puplic")));

//routes
app.use("/admin", adminData.routes);
app.use(shopRoutes);
app.use((req, res, next) => {
  res.status(404).render("404", { docTitle: "page not found" });
});
// const server = http.createServer(app);
// server.listen(3000);
// it is shortcut instead of require http, create server.
app.listen(3000);

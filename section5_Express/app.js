const http = require("http");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const bodyParser = require("body-parser");

//1. after we install express , we need to import it
const express = require("express");
// 2. we need to intialise it as object
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
// 3. use is method allow us to add middleware function .
//4. next  : functions will passed into function allow request to travel on next middleware
// app.use((req, res, next) => {
//   console.log("I'm in the middlware");
//   next(); // allows the request to continue to the next middlware in line.
// });

app.use("/admin", adminRoutes);
/*
 we can use filtering mechanism to put common starting segment for path 
  which all routes in agiven file use to outsource that into this app.js so
   we don't  have to repeat it with all routes .
*/
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h1> 404 page not found </h1>");
});
// const server = http.createServer(app);
// server.listen(3000);
// it is shortcut instead of require http, create server.
app.listen(3000);

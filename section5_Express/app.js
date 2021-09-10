const http = require("http");

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

app.use("/add-product", (req, res, next) => {
  console.log("I'm in another the middlware");
  // send : function allow us to send response.
  res.send(
    '<form action="/product" method= "post"><input type="text" name="title" ><button type="submit">add</button></form>'
  );
});

app.post("/product", (req, res, next) => {
  console.log(req.body.title);
  res.redirect("/");
});
app.use("/", (req, res, next) => {
  console.log("I'm in another middlware");
  res.send("<h1> hello from express </h1>");
});
// const server = http.createServer(app);
// server.listen(3000);
// it is shortcut instead of require http, create server.
app.listen(3000);

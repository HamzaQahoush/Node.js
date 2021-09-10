const express = require("express");
app = express();

// app.use((req, res, next) => {
//   console.log("Hello from first one");
//   next();
// });
// app.use((req, res, next) => {
//   console.log("Hello from second one");
//   res.send("Hello this is the response ");
// });
app.get("/", (req, res, next) => {
  res.send("<h1> Hello from Home</h1>");
});
app.get("/user", (req, res, next) => {
  res.send("<h1> Hello from user</h1>");
});

app.listen(3010);

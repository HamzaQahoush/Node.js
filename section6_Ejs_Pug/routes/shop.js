const express = require("express");
const path = require("path");
const router = express.Router();
const adminData = require("./admin");

router.get("/", (req, res, next) => {
  // res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
  res.render("shop");
  console.log(adminData.products);
});
module.exports = router;

/*  (./views/shop.html) => slash refers to our root folder on operating system
    , not  to project folder. we need to use path and import it .

  __dirname : global variable which holds aboslute path of operating system to project folder. 
  build a path in a way that works linux ad windows .
  */

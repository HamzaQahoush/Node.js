const express = require("express");

const router = express.Router();
// router like mini express app linked to otheer express app
router.get("/add-product", (req, res, next) => {
  console.log("I'm in another the middlware");
  // send : function allow us to send response.
  res.send(
    '<form action="/admin/product" method= "post"><input type="text" name="title" ><button type="submit">add</button></form>'
  );
});

router.post("/product", (req, res, next) => {
  console.log(req.body.title);
  res.redirect("/");
});
module.exports = router;

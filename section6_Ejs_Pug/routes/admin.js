const express = require("express");
const path = require("path");
const router = express.Router();
const products = [];
// router like mini express app linked to otheer express app
router.get("/add-product", (req, res, next) => {
  // send : function allow us to send response.
  // res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
  res.render("add-product", {
    docTitle: "add product",
    path: "/admin/add-product",
    formsCSS: true,
    ProductCSS: true,
    activeAdd: true,
  });
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body.title);
  products.push({ title: req.body.title });
  res.redirect("/");
});
// module.exports = router;

exports.routes = router; // alternate syntax
exports.products = products;

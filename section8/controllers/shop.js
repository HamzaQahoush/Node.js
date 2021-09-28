// const products = [];
const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  // const products = Product.fetchAll(); //we added  the method whhic return an array
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "products",
      path: "/products",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
};
exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/index", {
      prods: products,
      pageTitle: "index",
      path: "/",
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render("shop/cart", { path: "/cart", pageTitle: "cart" });
};
exports.getOrders = (req, res, next) => {
  res.render("shop/orders", { path: "/orders", pageTitle: "my orders" });
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", { path: "/checkout", pageTitle: "checkout" });
};

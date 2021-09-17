const express = require("express");
const router = express.Router();
const path = require("path");
const userNames = [];

router.get("/", (req, res, next) => {
  res.render("index", { docTitle: "home" });
});

router.post("/add-user", (req, res, next) => {
  console.log(req.body.username);
  userNames.push({ username: req.body.username });

  res.redirect("/users");
});
router.get("/users", (req, res, next) => {
  res.render("users", { docTitle: "users", userNames: userNames });
});

exports.routes = router; // alternate syntax
exports.userNames = userNames;

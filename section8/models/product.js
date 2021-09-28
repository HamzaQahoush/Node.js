const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "product.json"
);

const getProductFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      // return [];
      return cb([]);
    }
    cb(JSON.parse(fileContent));
  });
};

/*  in case we need to store data in file */

/*                              */
module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }
  save() {
    // const p = path.join(
    //   path.dirname(process.mainModule.filename),
    //   "data",
    //   "product.json"
    // );

    fs.readFile(p, (err, fileContent) => {
      let products = [];
    });

    /* we need th get existing array of product , 
    1. we will read the file */
    getProductFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }
  static fetchAll(cb) {
    // return product;
    getProductFromFile(cb);
  }
};

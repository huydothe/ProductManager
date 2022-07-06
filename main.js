"use strict";
exports.__esModule = true;
var product_1 = require("./product");
var productManager_1 = require("./productManager");
var laptop = new product_1.Product('Rog Strix', 3000);
var iphone = new product_1.Product('Iphone 13-pro Max-Blue cherry', 2500);
var productmanager = new productManager_1.ProductManager();
productmanager.setAdd(laptop);
productmanager.setAdd(iphone);
console.log(productmanager.getAll());

"use strict";
exports.__esModule = true;
exports.ProductManager = void 0;
var ProductManager = /** @class */ (function () {
    function ProductManager() {
        var _this = this;
        this.products = [];
        this.getAll = function () { return _this.products; };
        this.setAdd = function (product) { return _this.products.push(product); };
    }
    return ProductManager;
}());
exports.ProductManager = ProductManager;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRoute = void 0;
const express_1 = require("express");
const AddProductsToDB_1 = __importDefault(require("../../controller/productController/AddProductsToDB"));
const FilterProductsToDB_1 = __importDefault(require("../../controller/productController/FilterProductsToDB"));
exports.productsRoute = (0, express_1.Router)();
exports.productsRoute.get("/", (req, res) => {
    res.end("product route");
});
exports.productsRoute.post("/add", AddProductsToDB_1.default);
exports.productsRoute.post("/filter", FilterProductsToDB_1.default);

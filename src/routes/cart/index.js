"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartRoute = void 0;
const express_1 = require("express");
const AddProductToCartDB_1 = __importDefault(require("../../controller/cartController/AddProductToCartDB"));
const GetCartDataToCartDB_1 = __importDefault(require("../../controller/cartController/GetCartDataToCartDB"));
const ClearCartDataToDB_1 = __importDefault(require("../../controller/cartController/ClearCartDataToDB"));
exports.cartRoute = (0, express_1.Router)();
exports.cartRoute.get("/", (req, res) => {
    res.end("product route");
});
exports.cartRoute.post("/add", AddProductToCartDB_1.default);
exports.cartRoute.post("/clear", ClearCartDataToDB_1.default);
exports.cartRoute.post("/getCartData", GetCartDataToCartDB_1.default);

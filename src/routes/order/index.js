"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRoute = void 0;
const express_1 = require("express");
const SetOrderDataToDB_1 = __importDefault(require("../../controller/orderController/SetOrderDataToDB"));
const GetOrderDataToDB_1 = __importDefault(require("../../controller/orderController/GetOrderDataToDB"));
exports.orderRoute = (0, express_1.Router)();
exports.orderRoute.get("/", (req, res) => {
    res.end("product route");
});
exports.orderRoute.post("/placeOrder", SetOrderDataToDB_1.default);
exports.orderRoute.post("/getOrder", GetOrderDataToDB_1.default);

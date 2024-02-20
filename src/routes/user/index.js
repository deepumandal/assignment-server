"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoute = void 0;
const express_1 = require("express");
const SignupToUserDB_1 = __importDefault(require("../../controller/userController/SignupToUserDB"));
const LoginToUserDB_1 = __importDefault(require("../../controller/userController/LoginToUserDB"));
exports.userRoute = (0, express_1.Router)();
exports.userRoute.get("/", (req, res) => {
    res.end("product route");
});
exports.userRoute.post("/signup", SignupToUserDB_1.default);
exports.userRoute.post("/login", LoginToUserDB_1.default);

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ResponseSchema_1 = require("../utils/ResponseSchema");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const EnvProvider_1 = require("../utils/EnvProvider");
const tokenVerification = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return ResponseSchema_1.ServerResponse.sendResponse({
            message: "Token Not found",
            res,
            status: false,
            statusCode: 404,
        });
    }
    const token = authorization;
    try {
        jsonwebtoken_1.default.verify(token, EnvProvider_1.EnvProvider.TOKEN_SECRET);
        next();
    }
    catch (error) {
        console.log(error);
        return ResponseSchema_1.ServerResponse.sendResponse({
            message: "Unauthorized",
            res,
            status: false,
            statusCode: 401,
        });
    }
};
exports.default = tokenVerification;

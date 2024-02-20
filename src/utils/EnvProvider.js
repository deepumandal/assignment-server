"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvProvider = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.EnvProvider = {
    PORT: process.env.PORT,
    CONNECTION_URL: process.env.CONNECTION_URL,
    TOKEN_SECRET: process.env.TOKEN_SECRET,
};

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const EnvProvider_1 = require("../utils/EnvProvider");
const connectToDB = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("database connecting...");
    const connectionUrl = EnvProvider_1.EnvProvider.CONNECTION_URL;
    try {
        yield mongoose_1.default.connect(connectionUrl);
        console.log("DB connected successfully!");
    }
    catch (err) {
        if (err instanceof Error) {
            console.log(`Getting Error from DB connection ${err.message}`);
        }
        else {
            console.log("An unknown error occurred.");
        }
    }
});
exports.default = connectToDB;

"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Constants = __importStar(require("../../utils/constants"));
const ProductSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: {
        type: String,
        enum: Constants.Categories,
        required: true,
    },
    subcategory: {
        type: String,
        required: true,
        enum: Constants.SubCategory,
    },
    averageRating: {
        type: Number,
        required: true,
    },
    brand: {
        type: String,
        required: true,
        enum: Constants.Brands,
    },
    comments: {
        type: [
            {
                userId: { type: String, required: true },
                username: { type: String, required: true },
                comment: { type: String, required: true },
                rating: { type: Number, required: true },
                timestamp: { type: String, required: true },
            },
        ],
    },
    image: { type: String, required: true },
    price: { type: Number, required: true },
}, { versionKey: false });
const ProductModel = (0, mongoose_1.model)("Product", ProductSchema);
exports.default = ProductModel;

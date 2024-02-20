"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const cartSchema = new mongoose_1.Schema({
    userId: { type: String, require: true },
    userData: [
        {
            productId: { type: String, require: true },
            productCount: { type: Number, require: true },
            productTotal: { type: Number, require: true },
        },
    ],
}, { versionKey: false });
const cartModel = (0, mongoose_1.model)("cart", cartSchema);
exports.default = cartModel;

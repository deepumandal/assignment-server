"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    userId: { type: String, require: true },
    userData: [
        {
            OrderId: { type: String, require: true },
            ExpectedDelivery: { type: String, require: true },
            productId: { type: String, require: true },
            productCount: { type: Number, require: true },
            productTotal: { type: Number, require: true },
        },
    ],
}, { versionKey: false });
const orderModal = (0, mongoose_1.model)("order", orderSchema);
exports.default = orderModal;

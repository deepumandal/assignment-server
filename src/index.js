"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const EnvProvider_1 = require("./utils/EnvProvider");
const products_1 = require("./routes/products");
const cors_1 = __importDefault(require("cors"));
const db_1 = __importDefault(require("./database/db"));
const user_1 = require("./routes/user");
const cart_1 = require("./routes/cart");
const order_1 = require("./routes/order");
const tokenVarification_1 = __importDefault(require("./middleware/tokenVarification"));
// app setup
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: "*",
}));
// gateWay test route
app.get("/", (req, res) => {
    res.end("Hello GateWay this side!");
});
// routes
app.use("/products", products_1.productsRoute);
app.use("/user", user_1.userRoute);
app.use("/cart", tokenVarification_1.default, cart_1.cartRoute);
app.use("/order", tokenVarification_1.default, order_1.orderRoute);
// server listening
console.log("Server starting...");
(0, db_1.default)().then(() => {
    app.listen(EnvProvider_1.EnvProvider.PORT, () => {
        console.log(`Hello, Server is Fire 🚀. at port http://localhost:${EnvProvider_1.EnvProvider.PORT}`);
    });
});

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
const ResponseSchema_1 = require("../../utils/ResponseSchema");
const orderModal_1 = __importDefault(require("../../modals/orderModal"));
const SetOrderDataToDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { requestOrders, userId, } = req.body;
        if (Array.isArray(requestOrders) && requestOrders.length > 0) {
            const isValidRequestBody = validateRequestBody(requestOrders);
            if (isValidRequestBody) {
                const isNotFirstTimeOrder = yield orderModal_1.default.findOne({ userId });
                if (isNotFirstTimeOrder) {
                    let i = 0;
                    while (i < requestOrders.length) {
                        yield orderModal_1.default.findOneAndUpdate({
                            userId,
                        }, {
                            $push: {
                                userData: Object.assign({}, requestOrders[i]),
                            },
                        });
                        i++;
                    }
                }
                else {
                    // first time order
                    const newEntry = yield new orderModal_1.default({
                        userId,
                        userData: requestOrders,
                    });
                    yield newEntry.save();
                }
                const orderData = yield orderModal_1.default.findOne({ userId });
                return ResponseSchema_1.ServerResponse.sendResponse({
                    message: "Order successfully",
                    res,
                    status: true,
                    statusCode: 200,
                    data: orderData === null || orderData === void 0 ? void 0 : orderData.userData,
                });
            }
            else {
                return ResponseSchema_1.ServerResponse.sendResponse({
                    message: "Bad Request | Order Failed",
                    res,
                    status: false,
                    statusCode: 400,
                });
            }
        }
        else {
            return ResponseSchema_1.ServerResponse.sendResponse({
                message: "Bad Request | Order Failed",
                res,
                status: false,
                statusCode: 400,
            });
        }
    }
    catch (error) {
        console.log(error);
        return ResponseSchema_1.ServerResponse.InternalServerError(res);
    }
});
exports.default = SetOrderDataToDB;
const validateRequestBody = (requestBody) => {
    for (let i = 0; i < requestBody.length; i++) {
        if (!requestBody[i].productId ||
            !requestBody[i].productCount ||
            !requestBody[i].productTotal ||
            !requestBody[i].ExpectedDelivery ||
            !requestBody[i].OrderId) {
            return false;
        }
    }
    return true;
};

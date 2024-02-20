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
const ResponseSchema_1 = require("../../../utils/ResponseSchema");
const cartModal_1 = __importDefault(require("../../../modals/cartModal"));
const AddProductToCartDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId, productCount, productTotal, userId } = req.body;
        const isValidParameters = ValidateCart({
            productId,
            productCount,
            productTotal,
            userId,
        });
        if (isValidParameters) {
            let responseData = null;
            const userCartExist = yield cartModal_1.default.findOne({ userId });
            if (userCartExist) {
                const isExistingProduct = yield cartModal_1.default.findOne({
                    userId,
                    userData: {
                        $elemMatch: { productId },
                    },
                });
                if (isExistingProduct) {
                    if (productCount <= 0) {
                        yield cartModal_1.default.findOneAndUpdate({
                            userId,
                            "userData.productId": productId,
                        }, {
                            $pull: {
                                userData: { productId },
                            },
                        }, {
                            new: true,
                        });
                    }
                    else {
                        yield cartModal_1.default.findOneAndUpdate({
                            userId,
                            "userData.productId": productId,
                        }, {
                            $set: {
                                "userData.$": {
                                    productId,
                                    productCount,
                                    productTotal,
                                },
                            },
                        }, {
                            new: true,
                        });
                    }
                }
                else {
                    yield cartModal_1.default.findOneAndUpdate({
                        userId,
                    }, {
                        $push: {
                            userData: {
                                productId,
                                productCount,
                                productTotal,
                            },
                        },
                    }, {
                        upsert: true,
                        new: true,
                    });
                }
            }
            else {
                const newCartEntry = new cartModal_1.default({
                    userId,
                    userData: [
                        {
                            productId,
                            productCount,
                            productTotal,
                        },
                    ],
                });
                responseData = yield newCartEntry.save();
            }
            const allCartEntries = yield cartModal_1.default.findOne({ userId });
            return ResponseSchema_1.ServerResponse.sendResponse({
                message: "Added to cart successfully",
                res,
                status: true,
                statusCode: 200,
                data: allCartEntries === null || allCartEntries === void 0 ? void 0 : allCartEntries.userData,
            });
        }
        else {
            return ResponseSchema_1.ServerResponse.sendResponse({
                message: "Failed to add to cart due to invalid parameters",
                res,
                status: false,
                statusCode: 400,
            });
        }
    }
    catch (error) {
        return ResponseSchema_1.ServerResponse.InternalServerError(res);
    }
});
const ValidateCart = ({ productId, productCount, productTotal, }) => {
    if (!productId ||
        productCount === undefined ||
        productCount === null ||
        productCount < 0 ||
        productTotal === undefined ||
        productTotal === null ||
        productTotal < 0) {
        return false;
    }
    return true;
};
exports.default = AddProductToCartDB;

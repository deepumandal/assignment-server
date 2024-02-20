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
const GetOrderDataToDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.body;
        if (!userId) {
            return ResponseSchema_1.ServerResponse.sendResponse({
                message: " orderakdff ",
                res,
                status: false,
                statusCode: 400,
            });
        }
        const data = yield orderModal_1.default.findOne({ userId });
        return ResponseSchema_1.ServerResponse.sendResponse({
            message: "order fetched ",
            res,
            status: true,
            statusCode: 200,
            data: data === null || data === void 0 ? void 0 : data.userData,
        });
    }
    catch (error) {
        console.log(error);
        return ResponseSchema_1.ServerResponse.InternalServerError(res);
    }
});
exports.default = GetOrderDataToDB;

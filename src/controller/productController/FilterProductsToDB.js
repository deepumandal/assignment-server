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
const products_1 = __importDefault(require("../../modals/products"));
const FilterProductsToDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { avgtype, category, subcategory, brand, averageRating, name, querry, maxPrice, minPrice, _id, } = req.body;
        const query = {};
        if (_id)
            query._id = _id;
        if (category)
            query.category = category;
        if (subcategory)
            query.subcategory = subcategory;
        if (brand)
            query.brand = brand;
        if (name)
            query.name = name;
        if (averageRating !== undefined && avgtype) {
            if (avgtype === "gt") {
                query.averageRating = { $gt: averageRating };
            }
            else if (avgtype === "lte") {
                query.averageRating = { $lte: averageRating };
            }
        }
        if (querry) {
            query.description = { $regex: querry, $options: "i" };
        }
        if (minPrice !== undefined) {
            query.price = Object.assign(Object.assign({}, query.price), { $gte: minPrice });
        }
        if (maxPrice !== undefined) {
            query.price = Object.assign(Object.assign({}, query.price), { $lte: maxPrice });
        }
        const result = yield products_1.default.find(query).limit(20);
        return ResponseSchema_1.ServerResponse.sendResponse({
            message: "Data successfully Fetched",
            res,
            status: true,
            statusCode: 200,
            data: result,
        });
    }
    catch (error) {
        return ResponseSchema_1.ServerResponse.InternalServerError(res);
    }
});
exports.default = FilterProductsToDB;

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
const constants_1 = require("../../utils/constants");
const user_1 = __importDefault(require("../../modals/user"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const EnvProvider_1 = require("../../utils/EnvProvider");
const SignupToUserDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password, name } = req.body;
        if (!RequestBodyFeildValidation({
            email,
            password,
            res,
        })) {
            const isUserIdAlreadyExist = yield user_1.default.find({ email });
            if (isUserIdAlreadyExist.length) {
                return ResponseSchema_1.ServerResponse.sendResponse({
                    message: `User already exist`,
                    res,
                    status: false,
                    statusCode: 400,
                });
            }
            else {
                const newEntry = yield new user_1.default({
                    email,
                    password,
                    name,
                });
                yield newEntry.save();
                const token = jsonwebtoken_1.default.sign({
                    name: newEntry.name,
                    email: newEntry.email,
                    userId: newEntry._id,
                }, EnvProvider_1.EnvProvider.TOKEN_SECRET, { expiresIn: constants_1.expiry });
                return ResponseSchema_1.ServerResponse.sendResponse({
                    message: `test`,
                    res,
                    status: true,
                    statusCode: 200,
                    data: {
                        name: newEntry.name,
                        email: newEntry.email,
                        token: token,
                        userId: newEntry._id,
                    },
                });
            }
        }
    }
    catch (error) {
        console.log("error", error);
        return ResponseSchema_1.ServerResponse.InternalServerError(res);
    }
});
function RequestBodyFeildValidation({ res, email, password, }) {
    if (!email) {
        ResponseSchema_1.ServerResponse.sendResponse({
            message: `Bad Request | missing email `,
            res,
            status: false,
            statusCode: 400,
        });
        return true;
    }
    if (!password) {
        ResponseSchema_1.ServerResponse.sendResponse({
            message: `Bad Request | missing password `,
            res,
            status: false,
            statusCode: 400,
        });
        return true;
    }
    if (!constants_1.emailValidationRegex.test(email)) {
        ResponseSchema_1.ServerResponse.sendResponse({
            message: `Invalid email | valid example abc@gmail.com `,
            res,
            status: false,
            statusCode: 400,
        });
        return true;
    }
    if (!constants_1.passwordValidationRegex.test(password)) {
        ResponseSchema_1.ServerResponse.sendResponse({
            message: `Min 1 uppercase letter. \n Min 1 lowercase letter. \n Min 1 special character. \nMin 1 number. \nMin 8 characters. \n`,
            res,
            status: false,
            statusCode: 400,
        });
        return true;
    }
    return false;
}
exports.default = SignupToUserDB;

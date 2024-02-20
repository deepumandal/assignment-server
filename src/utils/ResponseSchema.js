"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerResponse = void 0;
const constants_1 = require("./constants");
exports.ServerResponse = {
    sendResponse: ({ res, statusCode, message, status, data }) => {
        const responseObj = {
            message: message,
            status: status,
            code: statusCode,
        };
        data ? (responseObj.data = data) : null;
        res.status(statusCode).send(responseObj);
    },
    InternalServerError: (res) => {
        res.status(500).send({
            message: constants_1.INTERNAL_SERVER_ERROR,
            status: false,
            code: 500,
        });
    },
};

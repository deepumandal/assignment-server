import { Response } from "express";
import { INTERNAL_SERVER_ERROR } from "./constants";

interface ServerResponseI {
  sendResponse: ({
    message,
    res,
    status,
    statusCode,
    data,
  }: {
    res: Response;
    statusCode: number;
    message: string;
    status: boolean;
    data?: any;
  }) => void;
  InternalServerError: (res: Response) => void;
}
interface responseObjI {
  message: string;
  status: boolean;
  code: number;
  data?: any;
}

export const ServerResponse: ServerResponseI = {
  sendResponse: ({ res, statusCode, message, status, data }) => {
    const responseObj: responseObjI = {
      message: message,
      status: status,
      code: statusCode,
    };
    data ? (responseObj.data = data) : null;
    res.status(statusCode).send(responseObj);
  },
  InternalServerError: (res) => {
    res.status(500).send({
      message: INTERNAL_SERVER_ERROR,
      status: false,
      code: 500,
    });
  },
};

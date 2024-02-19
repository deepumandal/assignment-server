import { NextFunction, Request, Response } from "express";
import { ServerResponse } from "../utils/ResponseSchema";
import jwt, { VerifyErrors } from "jsonwebtoken";
import { EnvProvider } from "../utils/EnvProvider";

const tokenVerification = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return ServerResponse.sendResponse({
      message: "Token Not found",
      res,
      status: false,
      statusCode: 404,
    });
  }

  const token = authorization as string;

  try {
    jwt.verify(token, EnvProvider.TOKEN_SECRET) as jwt.JwtPayload;

    next();
  } catch (error) {
    return ServerResponse.sendResponse({
      message: "Unauthorized",
      res,
      status: false,
      statusCode: 401,
    });
  }
};

export default tokenVerification;

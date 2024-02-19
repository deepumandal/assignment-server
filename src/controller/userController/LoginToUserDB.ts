import { Request, Response } from "express";
import { ServerResponse } from "../../utils/ResponseSchema";
import {
  emailValidationRegex,
  expiry,
  passwordValidationRegex,
} from "../../utils/constants";
import userModel from "../../modals/user";
import jwt from "jsonwebtoken";
import { EnvProvider } from "../../utils/EnvProvider";

interface requestBodyI {
  email: string;
  password: string;
}
const LoginToUserDB = async (req: Request, res: Response) => {
  try {
    const { email, password }: requestBodyI = req.body;

    if (
      !RequestBodyFeildValidation({
        email,
        password,
        res,
      })
    ) {
      const UserDetails = await userModel.find({
        email,
      });

      if (!UserDetails.length) {
        return ServerResponse.sendResponse({
          message: `User Not Found`,
          res,
          status: false,
          statusCode: 400,
        });
      } else {
        if (
          UserDetails[0].email === email &&
          UserDetails[0].password === password
        ) {
          const token = jwt.sign(
            {
              email,
              name: UserDetails[0].name,
              userId: UserDetails[0]._id,
            },
            EnvProvider.TOKEN_SECRET,
            { expiresIn: expiry }
          );

          return ServerResponse.sendResponse({
            message: `Success`,
            res,
            status: true,
            statusCode: 200,
            data: {
              email,
              name: UserDetails[0].name,
              token,
              userId: UserDetails[0]._id,
            },
          });
        } else if (UserDetails[0].password !== password) {
          return ServerResponse.sendResponse({
            message: `Incorrect Password`,
            res,
            status: false,
            statusCode: 400,
          });
        }
      }
    }
  } catch (error) {
    return ServerResponse.InternalServerError(res);
  }
};

function RequestBodyFeildValidation({
  res,
  email,
  password,
}: {
  res: Response;
  email: string;
  password: string;
}) {
  if (!email) {
    ServerResponse.sendResponse({
      message: `Bad Request | missing email `,
      res,
      status: false,
      statusCode: 400,
    });
    return true;
  }
  if (!password) {
    ServerResponse.sendResponse({
      message: `Bad Request | missing password `,
      res,
      status: false,
      statusCode: 400,
    });
    return true;
  }

  if (!emailValidationRegex.test(email)) {
    ServerResponse.sendResponse({
      message: `Invalid email | valid example abc@gmail.com `,
      res,
      status: false,
      statusCode: 400,
    });
    return true;
  }
  if (!passwordValidationRegex.test(password)) {
    ServerResponse.sendResponse({
      message: `Min 1 uppercase letter. \n Min 1 lowercase letter. \n Min 1 special character. \nMin 1 number. \nMin 8 characters. \n`,
      res,
      status: false,
      statusCode: 400,
    });
    return true;
  }
  return false;
}

export default LoginToUserDB;

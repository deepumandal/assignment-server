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
  name: string;
}

const SignupToUserDB = async (req: Request, res: Response) => {
  try {
    const { email, password, name }: requestBodyI = req.body;

    if (
      !RequestBodyFeildValidation({
        email,
        password,
        res,
      })
    ) {
      const isUserIdAlreadyExist = await userModel.find({ email });

      if (isUserIdAlreadyExist.length) {
        return ServerResponse.sendResponse({
          message: `User already exist`,
          res,
          status: false,
          statusCode: 400,
        });
      } else {
        const newEntry = await new userModel({
          email,
          password,
          name,
        });
        await newEntry.save();

        const token = jwt.sign(
          {
            name: newEntry.name,
            email: newEntry.email,
            userId: newEntry._id,
          },
          EnvProvider.TOKEN_SECRET,
          { expiresIn: expiry }
        );

        return ServerResponse.sendResponse({
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
  } catch (error) {
    console.log("error", error);
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

  // validate email is actually an email or not
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

export default SignupToUserDB;

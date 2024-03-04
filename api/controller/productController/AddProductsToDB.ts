import { Request, Response } from "express";
import { ServerResponse } from "../../utils/ResponseSchema";

const AddProductsToDB = async (req: Request, res: Response) => {
  try {
    return ServerResponse.sendResponse({
      message: "data saved successfully",
      res,
      status: true,
      statusCode: 200,
    });
  } catch (error) {
    console.log(error);
    return ServerResponse.InternalServerError(res);
  }
};

export default AddProductsToDB;

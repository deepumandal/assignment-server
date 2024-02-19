import { Request, Response } from "express";
import { ServerResponse } from "../../../utils/ResponseSchema";
import cartModel from "../../../modals/cartModal";

const GetCartDataToCartDB = async (req: Request, res: Response) => {
  try {
    const responseData = await cartModel.find();

    return ServerResponse.sendResponse({
      message: "Added to cart successfully",
      res,
      status: true,
      statusCode: 200,
      data: responseData,
    });
  } catch (error) {
    console.log(error);
    return ServerResponse.InternalServerError(res);
  }
};

export default GetCartDataToCartDB;

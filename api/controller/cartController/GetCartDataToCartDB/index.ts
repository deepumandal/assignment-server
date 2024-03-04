import { Request, Response } from "express";
import { ServerResponse } from "../../../utils/ResponseSchema";
import cartModel from "../../../modals/cartModal";

const GetCartDataToCartDB = async (req: Request, res: Response) => {
  try {
    const { userId }: { userId: string } = req.body;

    if (!userId) {
      return ServerResponse.sendResponse({
        message: "UserId not found",
        res,
        status: false,
        statusCode: 400,
      });
    }
    const responseData = await cartModel.findOne({ userId });

    return ServerResponse.sendResponse({
      message: "Added to cart successfully",
      res,
      status: true,
      statusCode: 200,
      data: responseData?.userData || [],
    });
  } catch (error) {
    console.log(error);
    return ServerResponse.InternalServerError(res);
  }
};

export default GetCartDataToCartDB;

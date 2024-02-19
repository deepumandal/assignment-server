import { Request, Response } from "express";
import { ServerResponse } from "../../../utils/ResponseSchema";
import cartModel from "../../../modals/cartModal";

const ClearCartDataToDB = async (req: Request, res: Response) => {
  try {
    const responseData = await cartModel.deleteMany();

    return ServerResponse.sendResponse({
      message: "Cartclear successfully",
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

export default ClearCartDataToDB;

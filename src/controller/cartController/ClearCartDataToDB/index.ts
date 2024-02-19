import { Request, Response } from "express";
import { ServerResponse } from "../../../utils/ResponseSchema";
import cartModel from "../../../modals/cartModal";

const ClearCartDataToDB = async (req: Request, res: Response) => {
  try {
    const { userId }: { userId: string } = req.body;

    if (!userId) {
      return ServerResponse.sendResponse({
        message: "User Id not found",
        res,
        status: false,
        statusCode: 400,
      });
    }
    const responseData = await cartModel.findOneAndUpdate(
      {
        userId,
      },
      {
        $set: {
          userData: [],
        },
      },
      {
        new: true,
      }
    );

    return ServerResponse.sendResponse({
      message: "Cartclear successfully",
      res,
      status: true,
      statusCode: 200,
      data: responseData?.userData,
    });
  } catch (error) {
    console.log(error);
    return ServerResponse.InternalServerError(res);
  }
};

export default ClearCartDataToDB;

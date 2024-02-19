import { Request, Response } from "express";
import { ServerResponse } from "../../utils/ResponseSchema";
import orderModal from "../../modals/orderModal";

const GetOrderDataToDB = async (req: Request, res: Response) => {
  try {
    const { userId }: { userId: string } = req.body;

    if (!userId) {
      return ServerResponse.sendResponse({
        message: " orderakdff ",
        res,
        status: false,
        statusCode: 400,
      });
    }

    const data = await orderModal.findOne({ userId });

    return ServerResponse.sendResponse({
      message: "order fetched ",
      res,
      status: true,
      statusCode: 200,
      data: data?.userData,
    });
  } catch (error) {
    console.log(error);
    return ServerResponse.InternalServerError(res);
  }
};

export default GetOrderDataToDB;

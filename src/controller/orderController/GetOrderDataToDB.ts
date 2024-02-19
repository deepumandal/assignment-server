import { Request, Response } from "express";
import { ServerResponse } from "../../utils/ResponseSchema";
import orderModal from "../../modals/orderModal";

const GetOrderDataToDB = async (req: Request, res: Response) => {
  try {
    const data = await orderModal.find();

    return ServerResponse.sendResponse({
      message: "order fetched ",
      res,
      status: true,
      statusCode: 200,
      data,
    });
  } catch (error) {
    console.log(error);
    return ServerResponse.InternalServerError(res);
  }
};

export default GetOrderDataToDB;

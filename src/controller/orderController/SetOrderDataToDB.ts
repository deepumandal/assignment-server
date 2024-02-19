import { Request, Response } from "express";
import { ServerResponse } from "../../utils/ResponseSchema";
import orderModal, { OrderFields } from "../../modals/orderModal";

const SetOrderDataToDB = async (req: Request, res: Response) => {
  try {
    const requestBody: OrderFields[] = req.body;

    console.log("requestBody", requestBody);

    // Check if requestBody exists and is an array
    if (Array.isArray(requestBody) && requestBody.length > 0) {
      const isValidRequestBody: boolean = validateRequestBody(requestBody);

      if (isValidRequestBody) {
        const orderData = await orderModal.insertMany(requestBody);
        return ServerResponse.sendResponse({
          message: "Order successfully",
          res,
          status: true,
          statusCode: 200,
          data: orderData,
        });
      } else {
        return ServerResponse.sendResponse({
          message: "Bad Request | Order Failed",
          res,
          status: false,
          statusCode: 400,
        });
      }
    } else {
      return ServerResponse.sendResponse({
        message: "Bad Request | Order Failed",
        res,
        status: false,
        statusCode: 400,
      });
    }
  } catch (error) {
    console.log(error);
    return ServerResponse.InternalServerError(res);
  }
};

export default SetOrderDataToDB;

const validateRequestBody = (requestBody: OrderFields[]): boolean => {
  for (let i = 0; i < requestBody.length; i++) {
    if (
      !requestBody[i].productId ||
      !requestBody[i].productCount ||
      !requestBody[i].productTotal ||
      !requestBody[i].ExpectedDelivery ||
      !requestBody[i].OrderId
    ) {
      return false;
    }
  }
  return true;
};

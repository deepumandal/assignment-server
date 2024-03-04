import { Request, Response } from "express";
import { ServerResponse } from "../../utils/ResponseSchema";
import orderModal, {
  OrderFields,
  userOrderInterface,
} from "../../modals/orderModal";

const SetOrderDataToDB = async (req: Request, res: Response) => {
  try {
    const {
      requestOrders,
      userId,
    }: {
      userId: string;
      requestOrders: userOrderInterface[];
    } = req.body;

    if (Array.isArray(requestOrders) && requestOrders.length > 0) {
      const isValidRequestBody: boolean = validateRequestBody(requestOrders);

      if (isValidRequestBody) {
        const isNotFirstTimeOrder = await orderModal.findOne({ userId });

        if (isNotFirstTimeOrder) {
          let i = 0;
          while (i < requestOrders.length) {
            await orderModal.findOneAndUpdate(
              {
                userId,
              },
              {
                $push: {
                  userData: {
                    ...requestOrders[i],
                  },
                },
              }
            );
            i++;
          }
        } else {
          // first time order
          const newEntry = await new orderModal({
            userId,
            userData: requestOrders,
          });
          await newEntry.save();
        }

        const orderData = await orderModal.findOne({ userId });

        return ServerResponse.sendResponse({
          message: "Order successfully",
          res,
          status: true,
          statusCode: 200,
          data: orderData?.userData,
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

const validateRequestBody = (requestBody: userOrderInterface[]): boolean => {
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

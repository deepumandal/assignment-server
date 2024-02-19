import { Request, Response } from "express";
import { ServerResponse } from "../../../utils/ResponseSchema";
import cartModel, { CartFields } from "../../../modals/cartModal";
import jwt, { JwtPayload } from "jsonwebtoken";

interface RequestBody {
  productId: string;
  productCount: number;
  productTotal: number;
  userId: string;
}

const AddProductToCartDB = async (req: Request, res: Response) => {
  try {
    const { productId, productCount, productTotal, userId }: RequestBody =
      req.body;

    const isValidParameters = ValidateCart({
      productId,
      productCount,
      productTotal,
      userId,
    });

    if (isValidParameters) {
      let responseData: CartFields | null = null;
      const userCartExist = await cartModel.findOne({ userId });

      if (userCartExist) {
        const isExistingProduct = await cartModel.findOne({
          userId,
          userData: {
            $elemMatch: { productId },
          },
        });

        if (isExistingProduct) {
          if (productCount <= 0) {
            await cartModel.findOneAndUpdate(
              {
                userId,
                "userData.productId": productId,
              },
              {
                $pull: {
                  userData: { productId },
                },
              },
              {
                new: true,
              }
            );
          } else {
            await cartModel.findOneAndUpdate(
              {
                userId,
                "userData.productId": productId,
              },
              {
                $set: {
                  "userData.$": {
                    productId,
                    productCount,
                    productTotal,
                  },
                },
              },
              {
                new: true,
              }
            );
          }
        } else {
          console.log(isExistingProduct);

          await cartModel.findOneAndUpdate(
            {
              userId,
            },
            {
              $push: {
                userData: {
                  productId,
                  productCount,
                  productTotal,
                },
              },
            },
            {
              upsert: true,
              new: true,
            }
          );
        }
      } else {
        const newCartEntry = new cartModel({
          userId,
          userData: [
            {
              productId,
              productCount,
              productTotal,
            },
          ],
        });
        responseData = await newCartEntry.save();
      }

      const allCartEntries = await cartModel.findOne({userId});

      return ServerResponse.sendResponse({
        message: "Added to cart successfully",
        res,
        status: true,
        statusCode: 200,
        data: allCartEntries?.userData,
      });
    } else {
      return ServerResponse.sendResponse({
        message: "Failed to add to cart due to invalid parameters",
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

const ValidateCart = ({
  productId,
  productCount,
  productTotal,
}: RequestBody): boolean => {
  if (
    !productId ||
    productCount === undefined ||
    productCount === null ||
    productCount < 0 ||
    productTotal === undefined ||
    productTotal === null ||
    productTotal < 0
  ) {
    return false;
  }
  return true;
};

export default AddProductToCartDB;

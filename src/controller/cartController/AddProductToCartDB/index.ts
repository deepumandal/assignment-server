import { Request, Response } from "express";
import { ServerResponse } from "../../../utils/ResponseSchema";
import cartModel, { CartFields } from "../../../modals/cartModal";

interface RequestBody {
  productId: string;
  productCount: number;
  productTotal: number;
}

const AddProductToCartDB = async (req: Request, res: Response) => {
  try {
    const { productId, productCount, productTotal }: RequestBody = req.body;


    const isValidParameters = ValidateCart({
      productId,
      productCount,
      productTotal,
    });

    if (isValidParameters) {
      let responseData: CartFields | null = null;
      const existingCartEntry = await cartModel.findOne({ productId });

      if (productCount <= 0) {
        if (existingCartEntry) {
          await existingCartEntry.deleteOne();
        }
      } else {
        if (existingCartEntry) {
          existingCartEntry.productCount = productCount;
          existingCartEntry.productTotal = productTotal;
          responseData = await existingCartEntry.save();
        } else {
          const newCartEntry = new cartModel({
            productId,
            productCount,
            productTotal,
          });
          responseData = await newCartEntry.save();
        }
      }

      const allCartEntries = await cartModel.find();

      return ServerResponse.sendResponse({
        message: "Added to cart successfully",
        res,
        status: true,
        statusCode: 200,
        data: allCartEntries,
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

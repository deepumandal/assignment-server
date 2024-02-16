import { Request, Response } from "express";
import { ServerResponse } from "../../utils/ResponseSchema";
import ProductModel, { requestBodyI } from "../../modals/products";
import { ProductData } from "../../../products";

const AddProductsToDB = async (req: Request, res: Response) => {
  try {
    // const body: requestBodyI = req.body;

    // for (let i = 0; i < ProductData.length; i++) {
    //   const data = new ProductModel(ProductData[i]);
    //   await data.save();
    //   console.log(200, " data saved : ", ProductData[i].name);
    // }
    console.log(ProductData.length);
    return ServerResponse.sendResponse({
      message: "data saved successfully",
      res,
      status: true,
      statusCode: 200,
    });
  } catch (error) {
    console.log(error);
    return ServerResponse.InternalServerError(res);
  }
};

export default AddProductsToDB;

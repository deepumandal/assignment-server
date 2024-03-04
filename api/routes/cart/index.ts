import { Request, Response, Router } from "express";
import AddProductToCartDB from "../../controller/cartController/AddProductToCartDB";
import GetCartDataToCartDB from "../../controller/cartController/GetCartDataToCartDB";
import ClearCartDataToDB from "../../controller/cartController/ClearCartDataToDB";

export const cartRoute = Router();
cartRoute.get("/", (req: Request, res: Response) => {
  res.end("product route");
});

cartRoute.post("/add", AddProductToCartDB);
cartRoute.post("/clear", ClearCartDataToDB);

cartRoute.post("/getCartData", GetCartDataToCartDB);

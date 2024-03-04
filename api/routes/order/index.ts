import { Request, Response, Router } from "express";
import SetOrderDataToDB from "../../controller/orderController/SetOrderDataToDB";
import GetOrderDataToDB from "../../controller/orderController/GetOrderDataToDB";

export const orderRoute = Router();
orderRoute.get("/", (req: Request, res: Response) => {
  res.end("product route");
});

orderRoute.post("/placeOrder", SetOrderDataToDB);
orderRoute.post("/getOrder", GetOrderDataToDB);

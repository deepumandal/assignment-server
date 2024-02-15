import { Request, Response, Router } from "express";
import AddProductsToDB from "../../controller/productController/AddProductsToDB";

export const productsRoute = Router();
productsRoute.get("/", (req: Request, res: Response) => {
  res.end("product route");
});

productsRoute.post("/add", AddProductsToDB);

import { Request, Response, Router } from "express";
import AddProductsToDB from "../../controller/productController/AddProductsToDB";
import FilterProductsToDB from "../../controller/productController/FilterProductsToDB";

export const productsRoute = Router();
productsRoute.get("/", (req: Request, res: Response) => {
  res.end("product route");
});

productsRoute.post("/add", AddProductsToDB);

productsRoute.post("/filter", FilterProductsToDB);

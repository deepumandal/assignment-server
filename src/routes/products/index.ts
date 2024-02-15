import { Request, Response, Router } from "express";

export const productsRoute = Router();
productsRoute.get("/", (req: Request, res: Response) => {
  res.end("product route");
});

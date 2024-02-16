import { Request, Response, Router } from "express";
import SignupToUserDB from "../../controller/userController/SignupToUserDB";
import LoginToUserDB from "../../controller/userController/LoginToUserDB";

export const userRoute = Router();
userRoute.get("/", (req: Request, res: Response) => {
  res.end("product route");
});

userRoute.post("/signup", SignupToUserDB);
userRoute.post("/login", LoginToUserDB);

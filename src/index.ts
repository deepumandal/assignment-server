import express, { Request, Response } from "express";
import { EnvProvider } from "./utils/EnvProvider";
import { productsRoute } from "./routes/products";
import cors from "cors";
import connectToDB from "./database/db";
import { userRoute } from "./routes/user";
// app setup
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

// gateWay test route
app.get("/", (req: Request, res: Response) => {
  res.end("Hello GateWay this side!");
});

// routes
app.use("/products", productsRoute);
app.use("/user", userRoute);

// server listening
console.log("Server starting...");
connectToDB().then(() => {
  app.listen(EnvProvider.PORT, () => {
    console.log(
      `Hello, Server is Fire 🚀. at port http://localhost:${EnvProvider.PORT}`
    );
  });
});

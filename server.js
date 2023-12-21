import express from "express";
import "dotenv/config";
import { connectMongoose } from "./helps/connectToDb.js";
import customerRouter from "./router/customerRouter.js";

const connect = await connectMongoose();
const _port = process.env.PORT || 4003;

const app = express();

app.use(express.json());
app.use(customerRouter);
if (connect) {
  app.listen(_port, () => console.log(`Iam running im port ${_port}`));
}

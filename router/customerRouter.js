import express from "express";
import {
  createCustomer,
  getCustomers,
} from "../controller/CustomerController.js";

const customerRouter = express.Router();

customerRouter.get("/customer", getCustomers).post("/customer", createCustomer);

export default customerRouter;

import express from "express";
import {
  createCustomer,
  deleteCustomer,
  getCustomers,
  getOneCustomer,
  updateCustomer,
} from "../controller/CustomerController.js";

// create a Routes: routing files
const customerRouter = express.Router();

customerRouter.get("/customer", getCustomers).post("/customer", createCustomer);
customerRouter.get("/customer/:id", getOneCustomer);
customerRouter.put("/customer/:id", updateCustomer);
customerRouter.delete("/customer/:id", deleteCustomer);

export default customerRouter;

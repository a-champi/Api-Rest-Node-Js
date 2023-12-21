import { customerModel } from "../models/Customer.js";

export const getCustomers = async (req, res) => {
  try {
    res.status(200).json(await customerModel.find());
  } catch (error) {
    console.error(error);
    res.send(500).json({ message: "server error" });
  }
};

export const createCustomer = async (req, res) => {
  const customer = new customerModel(req.body);
  try {
    await customer.save();
    res.status(201).json({ message: "customer was saved" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "server error" });
  }
};

// the file contains  the logic for handling HTTP request
import { customerModel } from "../models/Customer.js";

//Querying all customers data
export const getCustomers = async (req, res) => {
  try {
    res.status(200).json(await customerModel.find());
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "server error" });
  }
};

//Querying a specific customer data
export const getOneCustomer = async (req, res) => {
  const { id } = req.params;
  try {
    //use _id instead of id. The default identifier for MongoDB documents is _id
    res.status(200).json(await customerModel.findOne({ _id: id }));
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "server error" });
  }
};

//create a new customer
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

//Update a customer
export const updateCustomer = async (req, res) => {
  const { id } = req.params;
  try {
    const updateCustomer = await customerModel.findOneAndUpdate(
      { _id: id },
      req.body,
      { new: true }
    );
    res.status(200).json(updateCustomer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: " server error" });
    //res.status(500).json({ message: error.message });
  }
};

//Delete a customer
export const deleteCustomer = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const deletedCustomer = await customerModel.findByIdAndDelete(id);
    if (!deletedCustomer) {
      return res
        .status(404)
        .json({ message: `Customer with ID ${id} not found` });
    }
    res.status(204).json({ message: `Customer with ID ${id} was deleted` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "server error" });
  }
};

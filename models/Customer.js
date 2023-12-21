import mongoose from "mongoose";

//defining  Customer Schema
const customerSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },

    lastName: {
      type: String,
      required: true,
    },
    oderItems: [
      {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number },
      },
    ],

    orderTime: { type: Date, default: Date.now() },
  },
  { timestamps: true }
);

// create a collection Customer-Model
// defining a model customer
export const customerModel = mongoose.model("customer", customerSchema);

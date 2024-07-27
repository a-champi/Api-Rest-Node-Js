import mongoose from "mongoose";

//create a schema:   Customer Schema
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
// create a model customer
export const customerModel = mongoose.model("customer", customerSchema);

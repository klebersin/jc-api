"use strict";

const { default: mongoose } = require("mongoose");
const { Schema, model } = require("mongoose");

const invoiceItem = new Schema({
  name: { type: String, required: true },
  reason: { type: String, required: true },
  quantity: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  unitPrice: { type: Number },
  totalPrice: { type: Number },
  type: { type: String, required: true },
  sent: { type: Boolean, default: false },
  invoice: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Invoice",
    required: true,
  },
});

module.exports = new model("InvoiceItem", invoiceItem);

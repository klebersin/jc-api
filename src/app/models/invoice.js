"use strict";

const { INVOICE_STATUS } = require("../constans");
const { Schema, model } = require("mongoose");

const invoiceSchema = Schema({
  code: { type: String, required: true },
  date: { type: Date, default: Date.now },
  amount: { type: Number, require: true },
  paymentMethod: { type: String },
  discount: { type: Number, defaul: 0 },
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
  modifiedAt: { type: Date, default: Date.now },
  student: {
    type: Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  status: {
    type: String,
    enum: Object.values(INVOICE_STATUS),
    default: INVOICE_STATUS.PAID,
  },
});

module.exports = new model("Invoice", invoiceSchema);

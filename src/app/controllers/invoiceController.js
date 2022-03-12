const InvoiceItem = require("../models/invoiceItem");
const InvoiceModel = require("../models/invoice");
const { fillWithCeros } = require("../helpers");
const { INVOICE_STATUS } = require("../constans");

const createInvoice = async (request, h) => {
  const { items, student, amount, paymentMethod } = request.payload;
  try {
    const newInvoice = {
      code: `INV${fillWithCeros(await InvoiceModel.count())}`,
      amount,
      student,
      paymentMethod,
    };
    const invoiceCreated = await InvoiceModel.create(newInvoice);
    await Promise.all(
      items.map(async (item) => {
        const itemCreated = await InvoiceItem.create({
          ...item,
          invoice: invoiceCreated._id,
          name: item.type + " " + item.reason,
        });
      })
    );
  } catch (error) {
    console.log(error);
  }
  /**/
  const invoice = await InvoiceModel.find();
  return invoice;
};

const getInvoices = async () => {
  const invoices = InvoiceModel.aggregate([
    {
      $match: { status: { $ne: [INVOICE_STATUS.VOID] } },
    },
    {
      $lookup: {
        from: "invoiceitems",
        localField: "_id",
        foreignField: "invoice",
        as: "invoiceItems",
      },
    },
    {
      $lookup: {
        from: "students",
        localField: "student",
        foreignField: "_id",
        as: "student",
      },
    },
  ]);
  return invoices;
};

module.exports = { createInvoice, getInvoices };

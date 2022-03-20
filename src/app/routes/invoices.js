const {
  getInvoices,
  createInvoice,
  getInvoceWithDetails,
} = require("../controllers/invoiceController");

module.exports = [
  {
    method: "GET",
    path: "/invoice",
    handler: getInvoices,
  },

  {
    method: "POST",
    path: "/invoice",
    handler: createInvoice,
  },
  {
    method: "GET",
    path: "/invoice/{id}",
    handler: getInvoceWithDetails,
  },
];

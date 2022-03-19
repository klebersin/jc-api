"use strict";

const Hapi = require("hapi");
require("dotenv").config();
const {
  createInvoice,
  getInvoices,
  getInvoceWithDetails,
} = require("./controllers/invoiceController");
const {
  createStudent,
  getStudents,
  getStudent,
  updateStudent,
  deleteStudent,
} = require("./controllers/studentController");
const db = require("./database").db;

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 3000,
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  server.route({
    method: "GET",
    path: "/students",
    handler: getStudents,
  });
  server.route({
    method: "GET",
    path: "/students/{id}",
    handler: getStudent,
  });
  server.route({
    method: "POST",
    path: "/students",
    handler: createStudent,
  });
  server.route({
    method: "PUT",
    path: "/students/{studentId}",
    handler: updateStudent,
  });
  server.route({
    method: "DELETE",
    path: "/students/{studentId}",
    handler: deleteStudent,
  });

  server.route({
    method: "GET",
    path: "/invoice",
    handler: getInvoices,
  });

  server.route({
    method: "POST",
    path: "/invoice",
    handler: createInvoice,
  });
  server.route({
    method: "GET",
    path: "/invoice/{id}",
    handler: getInvoceWithDetails,
  });

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();

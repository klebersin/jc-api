"use strict";

const Hapi = require("@hapi/hapi");
const glob = require("glob");

require("dotenv").config();

const validate = async (request, username, password, h) => {
  console.log("here");
  return { isValid: true, credentials: { id: 1, name: "kleber" } };
};

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

  /*await server.register(require("@hapi/basic"));

  server.auth.strategy("login", "basic", {
    validate,
  });
  //server.auth.default("login");*/

  glob
    .sync("/routes/*.js", {
      root: __dirname,
    })
    .forEach((file) => {
      const route = require(file);
      server.route(route);
    });

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();

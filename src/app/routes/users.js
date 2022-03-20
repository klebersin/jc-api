const { createUser } = require("../controllers/userController");

module.exports = [
  {
    method: "POST",
    path: "/users",
    options: {
      handler: createUser,
    },
  },
  {
    method: "GET",
    path: "/users",
    handler: (request) => {
      return "Logging";
    },
  },
];

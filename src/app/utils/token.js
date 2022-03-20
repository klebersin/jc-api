const Jwt = require("@hapi/jwt");

const token = Jwt.token.generate(
  {
    aud: "urn:audience:test",
    iss: "urn:issuer:test",
    user: "some_user_name",
    group: "hapi_community",
  },
  {
    key: "some_shared_secret",
    algorithm: "HS512",
  },
  {
    ttlSec: 14400, // 4 hours
  }
);

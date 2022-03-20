const { Boom } = require("@hapi/boom");
const UserModel = require("../models/users");

function hashPassword(password, cb) {
  // Generate a salt at level 10 strength
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      return cb(err, hash);
    });
  });
}

const createUser = async (request, h) => {
  console.log("here");
  const { user } = request.payload;
  console.log(user);
  /*hashPassword(request.payload.password, async (err, hash) => {
    if (err) {
      throw Boom.badRequest(err);
    }
    const createdUser = await UserModel.create({
      user,
      password: hash,
      role: "Admin",
    });
    return { id_token: createToken(user) };
  });*/
  return {};
};

module.exports = {
  createUser,
};

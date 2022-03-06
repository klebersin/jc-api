const { Schema, model } = require("mongoose");
const { STUDENT_STATUS_TYPES } = require("../constans");

const studentSchema = new Schema({
  code: {
    type: String,
    required: true,
  },
  name: String,
  plastname: String,
  mlastname: String,
  grade: Number,
  address: String,
  fatherNames: String,
  motherNames: String,
  status: {
    type: String,
    default: STUDENT_STATUS_TYPES.ACTIVE,
  },
});

module.exports = model("Student", studentSchema);

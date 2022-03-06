const { Schema, model } = require("mongoose");
const { STUDENT_STATUS_TYPES } = require("../constans");

const studentSchema = new Schema({
  code: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  plastname: {
    type: String,
    required: true,
  },
  mlastname: {
    type: String,
    required: true,
  },
  grade: {
    type: Number,
    required: true,
  },
  address: String,
  fatherNames: String,
  motherNames: String,
  status: {
    type: String,
    default: STUDENT_STATUS_TYPES.ACTIVE,
  },
});

module.exports = model("Student", studentSchema);

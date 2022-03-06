const { Boom } = require("@hapi/boom");
const { STUDENT_STATUS_TYPES } = require("../constans");
const StudentModel = require("../models/students");

const getStudents = async (request, h) => {
  try {
    const students = await StudentModel.find({
      status: STUDENT_STATUS_TYPES.ACTIVE,
    });
    return students;
  } catch (error) {
    console.log(error);
  }
};

const getStudent = async (request, h) => {
  try {
    const student = await StudentModel.findById(request.payload.id);
    return student;
  } catch (error) {
    console.log(error);
  }
};

const createStudent = async (request, h) => {
  try {
    const newStudent = await StudentModel.create(request.payload);
    return newStudent;
  } catch (error) {
    throw Boom.badRequest(`Wrong fate format ${error}`);
  }
};

const updateStudent = async (request, h) => {
  try {
    const studentId = request.params.studentId;
    const student = request.payload;
    const updatedStudent = await StudentModel.findByIdAndUpdate(
      studentId,
      student
    );
    return updatedStudent;
  } catch (error) {
    throw Boom.badRequest(`Wrong fate format ${error}`);
  }
};

const deleteStudent = async (request, h) => {
  try {
    const studentId = request.params.studentId;
    const deletedStudent = await StudentModel.findByIdAndUpdate(studentId, {
      status: STUDENT_STATUS_TYPES.INACTIVE,
    });
    return deletedStudent;
  } catch (error) {
    throw Boom.badRequest(`Wrong fate format ${error}`);
  }
};

module.exports = {
  createStudent,
  getStudents,
  getStudent,
  updateStudent,
  deleteStudent,
};

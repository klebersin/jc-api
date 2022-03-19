const { Boom } = require("@hapi/boom");
const { STUDENT_STATUS_TYPES } = require("../constans");
const StudentModel = require("../models/students");

const getStudents = async (request, h) => {
  try {
    const { page, rowsPerPage, filterStudents } = request.query;
    const skip = (rowsPerPage || 1) * (page || 1);
    const filter = request.query.filterStudents || "";
    const match = {
      status: STUDENT_STATUS_TYPES.ACTIVE,
    };
    if (filter) {
      match.$and = [
        {
          $or: [
            {
              name: {
                $regex: `${filter}`,
                $options: `i`,
              },
            },
            {
              fatherSurname: {
                $regex: `${filter}`,
                $options: `i`,
              },
            },
            {
              motherSurname: {
                $regex: `${filter}`,
                $options: `i`,
              },
            },
            {
              code: {
                $regex: `${filter}`,
                $options: `i`,
              },
            },
          ],
        },
      ];
    }
    const students = await StudentModel.aggregate([
      {
        $match: match,
      },
    ])
      .sort("name")
      .skip(skip)
      .limit(+(rowsPerPage || 5));

    const count = await StudentModel.count();
    return {
      items: students,
      count,
    };
  } catch (error) {
    console.log(error);
    return { items: [], count: 0 };
  }
};

const getStudent = async (request, h) => {
  try {
    console.log(request.payload.id);
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

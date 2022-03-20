const {
  getStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");

module.exports = [
  {
    method: "GET",
    path: "/students",
    handler: getStudents,
  },
  {
    method: "GET",
    path: "/students/{studentId}",
    handler: getStudent,
  },
  {
    method: "POST",
    path: "/students",
    handler: createStudent,
  },
  {
    method: "PUT",
    path: "/students/{studentId}",
    handler: updateStudent,
  },
  {
    method: "DELETE",
    path: "/students/{studentId}",
    handler: deleteStudent,
  },
];

const { Boom } = require('@hapi/boom');
const StudentModel = require('../models/students');

const getStudents = async (request, h) => {
    try {
        const students = await StudentModel.find();
        return students.toJSON();
    } catch (error) {
        throw Boom.badRequest(`Wrong fate format ${error}`);
    }
    
}

const createStudent = async (request, h) => {
    try {
        const newStudent = await StudentModel.create(request.payload);
        return newStudent.toJSON();
    } catch (error) {
        throw Boom.badRequest(`Wrong fate format ${error}`);
    }
    
}

const updateStudent = async (request, h) => {
    try {
        const newStudent = await StudentModel.update(request.payload);
        return newStudent.toJSON();
    } catch (error) {
        throw Boom.badRequest(`Wrong fate format ${error}`);
    }
    
}

const deleteStudent = async (request, h) => {
    try {
        const newStudent = await StudentModel.create(request.payload);
        return newStudent.toJSON();
    } catch (error) {
        throw Boom.badRequest(`Wrong fate format ${error}`);
    }
    
}

module.exports = {
    createStudent,
    getStudents,
    updateStudent,
    deleteStudent
}
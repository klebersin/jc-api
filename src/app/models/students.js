const { Schema, model } = require('mongoose')

const studentSchema = new Schema({
    code: { 
        type: String,
        required: true
    },
    name: String,
    plastname: String,
    mlastname: String,
    grade: Number,
    address: String,
    mothernames: String,
    fathernames: String,
    status: Number,
});

module.exports = model('Student', studentSchema);
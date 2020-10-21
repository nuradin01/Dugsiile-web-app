const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name: {
      type: String,
      trim: true,
      required: [true, 'Please add a student name'],
    },
    parentName: String,
    parentPhone: String,
    studentPhone: String,
    gender: {
        type: String,
        enum: ['Male','Female'],
        required: [true, 'Please choose a gender'],
    },
    studentSubjects: {
        type: [String],
        required: [true, 'Please add Subjects'],
    },
    isScholarship: {
        type: Boolean,
        default: false
    },
    joined: {
        type: Date,
        default: Date.now,
    }

  
});

module.exports = mongoose.model('Students', StudentSchema);

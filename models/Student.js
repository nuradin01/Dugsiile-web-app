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
        enum: ['Male','Female', 'male', 'female'],
        required: [true, 'Please choose a gender'],
    },
    studentSubjects: { 
        type: [String],
    },
    fee: Number,
    isScholarship: {
        type: Boolean,
        default: false
    },
    joinedAt: {
        type: Date,
        default: Date.now,
    },
    isLeft: {
        type: Boolean,
        default: false
    },
    leftAt: {
        type: Date,
        default: null,
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true,
      },

  
});

module.exports = mongoose.model('Student', StudentSchema);

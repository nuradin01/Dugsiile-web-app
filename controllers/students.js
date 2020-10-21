const Student = require('../models/Student')
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');


// @desc            Add Student
// @route           POST /api/v1/students
// @access          Private
exports.addStudent = asyncHandler(async (req, res, next) => {
    // Add user to req.body
    // req.body.user = req.user.id;
  
 
    const student = await Student.create(req.body);
  
    res.status(201).json({ success: true, data: student });
  });
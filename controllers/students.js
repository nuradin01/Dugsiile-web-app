const Student = require('../models/Student')
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');


// @desc            Get all Students
// @route           GET /api/v1/students
// @access          Private
exports.getStudents = asyncHandler(async (req, res, next) => {
    res.status(200).json(res.advancedResults);
  });

  // @desc            Get single student
// @route           GET /api/v1/students/:id
// @access          Private
exports.getStudent = asyncHandler(async (req, res, next) => {
    const student = await Student.findById(req.params.id);
  
    // if the format of the ID is correct but not in database
    if (!student) {
      return next(
        new ErrorResponse(`Student not found with id of ${req.params.id}`, 404)
      );
    }
    res.status(200).json({ success: true, data: student });
  });

// @desc            Add Student
// @route           POST /api/v1/students
// @access          Private
exports.addStudent = asyncHandler(async (req, res, next) => {
    // Add user to req.body
    // req.body.user = req.user.id;
    const student = await Student.create(req.body);
  
    res.status(201).json({ success: true, data: student });
  });
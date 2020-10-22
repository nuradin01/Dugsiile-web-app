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

  // @desc            Update Student
// @route           PUT /api/v1/students/:id
// @access          Private
exports.updateStudent = asyncHandler(async (req, res, next) => {
  let student = await Student.findById(req.params.id);
  if (!student) {
    return next(
      new ErrorResponse(`Student not found with id of ${req.params.id}`, 404)
    );
  }

  // Make sure user is the bootcamp owner
  // if (bootcamp.user.toString() !== req.user.id && req.user.role !== 'admin') {
  //   return next(
  //     new ErrorResponse(
  //       `User with Id of  ${req.params.id} is not authorized to update this bootcamp`,
  //       401
  //     )
  //   );
  // }

  student = await Student.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({ success: true, data: student });
});

// @desc            Delete Student
// @route           DELETE /api/v1/students/:id
// @access          Private
exports.deleteStudent = asyncHandler(async (req, res, next) => {
  const student = await Student.findById(req.params.id);

  if (!student) {
    return next(
      new ErrorResponse(`Student not found with id of ${req.params.id}`, 404)
    );
  }
  // Make sure user is the bootcamp owner
  // if (bootcamp.user.toString() !== req.user.id && req.user.role !== 'admin') {
  //   return next(
  //     new ErrorResponse(
  //       `User with Id of  ${req.params.id} is not authorized to delete this bootcamp`,
  //       401
  //     )
  //   );
  // }

  student.remove();
  res.status(200).json({ success: true, data: {} });
});
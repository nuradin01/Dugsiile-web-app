const Student = require('../models/Student');
const Fee = require('../models/Fee');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

// @desc            Charge All Paid Students
// @route           POST /api/v1/fees
// @access          Private
exports.chargeAllPaidStudents = asyncHandler(async (req, res, next) => {
  const students = await Student.find({ isScholarship: false, left: null });
  let fees = await students.map((student) => {
    const feeToCharge = {
      balance:student.fee,
      student: student._id,
      amountCharged: student.fee,
    };
    return Fee.create(feeToCharge);
  });
  // // Add student to req.body
  // req.body.student = students._id;
  // const student = await Student.create(req.body);
  fees = await Promise.all(fees);
  console.log(fees);
  res.status(201).json({ success: true, count: fees.length, data: fees });
});
// @desc            Charge Single Student
// @route           POST /api/v1/fees/:id
// @access          Private
exports.chargeStudent = asyncHandler(async (req, res, next) => {
  const student = await Student.findById(req.params.id);
  // if the format of the ID is correct but not in database
  if (!student) {
    return next(
      new ErrorResponse(`Student not found with id of ${req.params.id}`, 404)
    );
  }

  const feeToCharge = {
    balance:student.fee,
    student: student._id,
    amountCharged: student.fee,
  };
  const fee = await Fee.create(feeToCharge);

  res.status(201).json({ success: true, data: fee });
});

// @desc            Receive fee from single student
// @route           PUT /api/v1/fees/:id
// @access          Private
exports.receivePayment = asyncHandler(async (req, res, next) => {
  let fee = await Fee.findById(req.params.id);
  if (!fee) {
    return next(
      new ErrorResponse(`Fee not found with id of ${req.params.id}`, 404)
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
  req.body.balance = fee.amountCharged - req.body.amountPaid

  fee = await Fee.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({ success: true, data: fee });
});

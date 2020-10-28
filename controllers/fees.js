const Student = require('../models/Student');
const Fee = require('../models/Fee');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');


// @desc            Get all fees for a user
// @route           GET /api/v1/fees
// @access          private
exports.getFees = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

// @desc            Charge All Paid Students
// @route           POST /api/v1/fees
// @access          Private
exports.chargeAllPaidStudents = asyncHandler(async (req, res, next) => {
  const students = await Student.find({ isScholarship: false, leftAt: null, user: req.user.id });
  let fees = await students.map((student) => {
    const feeToCharge = {
      balance:student.fee,
      student: student._id,
      user: req.user.id,
      amountCharged: student.fee,
    };
    return Fee.create(feeToCharge);
  });
 
  fees = await Promise.all(fees);
 
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

  // Make sure user is the student's teacher
  if (student.user.toString() !== req.user.id && req.user.role !== 'admin') {
    return next(
      new ErrorResponse(
        `User with Id of  ${req.params.id} is not authorized to charge this student`,
        401
      )
    );
  }
  const feeToCharge = {
    balance:student.fee,
    student: student._id,
    user: req.user.id,
    amountCharged: student.fee,
  };
  const fee = await Fee.create(feeToCharge);

  res.status(201).json({ success: true, data: fee });
});

// @desc            Receive fee from single student
// @route           PUT /api/v1/fees/:id
// @access          Private
exports.receivePayment = asyncHandler(async (req, res, next) => {
  let fee = await Fee.findOne({student:req.params.id, paidAt: null});
  if (!fee) {
    return next(
      new ErrorResponse(`This Student have paid all fees`, 404)
    );
  }

  // Make sure user is the student's teacher
  if (fee.user.toString() !== req.user.id && req.user.role !== 'admin') {
    return next(
      new ErrorResponse(
        `User with Id of  ${req.params.id} is not authorized to receive a fee from this student`,
        401
      )
    );
  }
  req.body.balance = fee.amountCharged - req.body.amountPaid

  fee = await Fee.findByIdAndUpdate(fee._id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({ success: true, data: fee });
});

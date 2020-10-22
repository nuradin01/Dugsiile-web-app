const Student = require('../models/Student')
const Fee = require('../models/Fee')
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

// @desc            Charge Students
// @route           POST /api/v1/fees
// @access          Private
exports.chargeStudents = asyncHandler(async (req, res, next) => {
    const students = await Student.find({isScholarship: false, left:null})
    const fees = await students.map(async student => { 
        const chargedStudent = {
            ...req.body,
            student: student._id,
            amountCharged: student.fee
        }
       return await Fee.create(chargedStudent)
    }
    )
    // // Add student to req.body
    // req.body.student = students._id;
    // const student = await Student.create(req.body);
   console.log(fees);
    res.status(201).json({ success: true,count:fees.length, data: fees });
  });
const express = require('express');
const { chargeAllPaidStudents, chargeStudent, receivePayment, getUnpaidFees } = require('../controllers/fees');

const Fee = require('../models/Fee')
const advancedResults = require('../middleware/advancedResults');


const router = express.Router();

router.route('/').get(
    advancedResults(Fee, {
      path: 'student',
      select: 'name',
    }),
    getUnpaidFees
  ).post(chargeAllPaidStudents);
router.route('/:id').post(chargeStudent).put(receivePayment);

module.exports = router;
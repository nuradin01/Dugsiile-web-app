const express = require('express');
const { chargeAllPaidStudents, chargeStudent, receivePayment, getFees } = require('../controllers/fees');

const Fee = require('../models/Fee')
const advancedResults = require('../middleware/advancedResults');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

router.use(protect);
router.use(authorize('user', 'admin'));

router.route('/').get(
    advancedResults(Fee, {
      path: 'student',
      select: 'name',
    }),
    getFees
  ).post(chargeAllPaidStudents);
router.route('/:id').post(chargeStudent).put(receivePayment);

module.exports = router;
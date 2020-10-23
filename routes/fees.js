const express = require('express');
const { chargeAllPaidStudents, chargeStudent, receivePayment } = require('../controllers/fees');

const router = express.Router();

router.route('/').post(chargeAllPaidStudents);
router.route('/:id').post(chargeStudent).put(receivePayment);

module.exports = router;
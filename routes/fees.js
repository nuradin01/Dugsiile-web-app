const express = require('express');
const { chargeStudents } = require('../controllers/fees');

const router = express.Router();

router.route('/').post(chargeStudents);

module.exports = router;
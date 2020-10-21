const express = require('express');
const { addStudent } = require('../controllers/students');

const router = express.Router();

router.route('/').post(addStudent);

module.exports = router;

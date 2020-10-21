const express = require('express');
const { addStudent, getStudents, getStudent } = require('../controllers/students');

const Student = require('../models/Student')
const advancedResults = require('../middleware/advancedResults');


const router = express.Router();

router.route('/').get(advancedResults(Student), getStudents).post(addStudent);

router
  .route('/:id')
  .get(getStudent)

module.exports = router;

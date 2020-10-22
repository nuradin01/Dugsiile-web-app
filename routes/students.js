const express = require('express');
const { addStudent, getStudents, getStudent, updateStudent, deleteStudent } = require('../controllers/students');

const Student = require('../models/Student')
const advancedResults = require('../middleware/advancedResults');


const router = express.Router();

router.route('/').get(advancedResults(Student), getStudents).post(addStudent);

router
  .route('/:id')
  .get(getStudent).put( updateStudent).delete(deleteStudent)

module.exports = router;

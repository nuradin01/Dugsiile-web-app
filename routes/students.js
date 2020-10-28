const express = require('express');
const { addStudent, getStudents, getStudent, updateStudent, deleteStudent } = require('../controllers/students');

const Student = require('../models/Student')
const advancedResults = require('../middleware/advancedResults');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();
router.use(protect);
router.use(authorize('user', 'admin'));

router.route('/').get(advancedResults(Student), getStudents).post(addStudent);

router
  .route('/:id')
  .get(getStudent).put( updateStudent).delete(deleteStudent)

module.exports = router;

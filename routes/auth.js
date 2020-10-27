const express = require('express');
const {
  register,
  login,
  getMe,

 
  updateDetails,

  logout,
} = require('../controllers/auth');

const router = express.Router();
// Protect middleware
const { protect } = require('../middleware/auth');

router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);
router.get('/me', protect, getMe);
router.put('/updatedetails', protect, updateDetails);


module.exports = router;

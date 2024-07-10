const express = require('express');
const { registerUser, authUser, getUserProfile, updateUserProfile } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();


router.post('/login', authUser);
router.post('/register', registerUser);
router.get('/profile', protect, getUserProfile);

// router.route('/register').post(registerUser);
// router.route('/login').post(authUser);
// router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);

module.exports = router;


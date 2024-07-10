const express = require('express');
const { submitFeedback, getFeedback } = require('../controllers/feedbackController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/').post(protect, submitFeedback);
router.route('/:userId').get(protect, getFeedback);

module.exports = router;
const express = require('express');
const { sendMessage, getMessages } = require('../controllers/messageController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/').post(protect, sendMessage);
router.route('/:userId').get(protect, getMessages);

module.exports = router;
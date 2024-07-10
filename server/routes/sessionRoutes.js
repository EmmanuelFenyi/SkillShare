const express = require('express');
const { scheduleSession, getUpcomingSessions, getPastSessions, updateSession, deleteSession } = require('../controllers/sessionController');
const router = express.Router();

router.route('/').post(scheduleSession);
router.route('/:userId/upcoming').get(getUpcomingSessions);
router.route('/:userId/past').get(getPastSessions);
router.route('/:sessionId').put(updateSession).delete(deleteSession);

module.exports = router;

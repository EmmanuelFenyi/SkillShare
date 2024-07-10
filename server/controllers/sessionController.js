const asyncHandler = require('express-async-handler');
const Session = require('../models/Session');

const scheduleSession = asyncHandler(async (req, res) => {
  const { teacherId, studentId, date } = req.body;

  const session = new Session({ teacherId, studentId, date });

  const createdSession = await session.save();
  res.status(201).json(createdSession);
});

const getUpcomingSessions = asyncHandler(async (req, res) => {
  const sessions = await Session.find({ studentId: req.params.userId, date: { $gte: new Date() } });
  res.json(sessions);
});

const getPastSessions = asyncHandler(async (req, res) => {
  const sessions = await Session.find({ studentId: req.params.userId, date: { $lt: new Date() } });
  res.json(sessions);
});

const updateSession = asyncHandler(async (req, res) => {
  const session = await Session.findById(req.params.sessionId);

  if (session) {
    session.date = req.body.date || session.date;

    const updatedSession = await session.save();
    res.json(updatedSession);
  } else {
    res.status(404);
    throw new Error('Session not found');
  }
});

const deleteSession = asyncHandler(async (req, res) => {
  const session = await Session.findById(req.params.sessionId);

  if (session) {
    await session.remove();
    res.json({ message: 'Session removed' });
  } else {
    res.status(404);
    throw new Error('Session not found');
  }
});

module.exports = { scheduleSession, getUpcomingSessions, getPastSessions, updateSession, deleteSession };

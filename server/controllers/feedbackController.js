const asyncHandler = require('express-async-handler');
const Feedback = require('../models/Feedback');

const submitFeedback = asyncHandler(async (req, res) => {
  const { sessionId, rating, review } = req.body;

  const feedback = new Feedback({
    sessionId,
    userId: req.user._id,
    rating,
    review,
  });

  const createdFeedback = await feedback.save();
  res.status(201).json(createdFeedback);
});

const getFeedback = asyncHandler(async (req, res) => {
  const feedback = await Feedback.find({ userId: req.params.userId });
  res.json(feedback);
});

module.exports = { submitFeedback, getFeedback };

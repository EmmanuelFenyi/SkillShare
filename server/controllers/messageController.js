const asyncHandler = require('express-async-handler');
const Message = require('../models/Message');

const sendMessage = asyncHandler(async (req, res) => {
  const { receiverId, content } = req.body;

  const message = new Message({
    senderId: req.user._id,
    receiverId,
    content,
  });

  const createdMessage = await message.save();
  res.status(201).json(createdMessage);
});

const getMessages = asyncHandler(async (req, res) => {
  const messages = await Message.find({ $or: [{ senderId: req.params.userId }, { receiverId: req.params.userId }] });
  res.json(messages);
});

module.exports = { sendMessage, getMessages };

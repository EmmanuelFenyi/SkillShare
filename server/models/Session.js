const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  teacherId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, required: true },
  rating: { type: Number },
  review: { type: String },
});

const Session = mongoose.model('Session', sessionSchema);
module.exports = Session;

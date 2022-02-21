const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
  question: { type: String, required: true },
  reponse: { type: String, required: true },
  questionId: { type: Number, required: true }
});

module.exports = mongoose.model('Question', questionSchema);
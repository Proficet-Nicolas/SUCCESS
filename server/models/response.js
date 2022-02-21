const mongoose = require('mongoose');

const responseSchema = mongoose.Schema({
  response: { type: String, required: true }
});

module.exports = mongoose.model('Response', responseSchema);
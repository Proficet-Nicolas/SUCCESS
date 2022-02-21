const mongoose = require('mongoose');

const groupeSchema = mongoose.Schema({
  groupname: { type: String, required: true },
  speciality: { type: String, required: true }
});

module.exports = mongoose.model('Groupe', groupeSchema);
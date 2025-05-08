const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  gameType: String,
  location: String,
  date: Date,
  maxPlayers: Number
}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);

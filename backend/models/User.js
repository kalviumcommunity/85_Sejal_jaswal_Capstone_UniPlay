// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  universityId: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['organizer', 'player'],
    default: 'player'
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);

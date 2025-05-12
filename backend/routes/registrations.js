//routes/registration.js

const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration');
const Event = require('../models/Event');
const User = require('../models/User');

// Player joins an event
router.post('/', async (req, res) => {
  const { eventId, userId } = req.body;

  if (!eventId || !userId) {
    return res.status(400).json({ message: 'Event ID and User ID are required' });
  }

  try {
    const event = await Event.findById(eventId);
    const user = await User.findById(userId);
    if (!event || !user) return res.status(404).json({ message: 'Event or user not found' });

    const alreadyJoined = await Registration.findOne({ event: eventId, user: userId });
    if (alreadyJoined) {
      return res.status(400).json({ message: 'User already registered for this event' });
    }

    const currentRegistrations = await Registration.countDocuments({ event: eventId });
    if (currentRegistrations >= event.maxPlayers) {
      return res.status(400).json({ message: 'Event is full' });
    }

    const registration = new Registration({ event: eventId, user: userId });
    await registration.save();

    res.status(201).json({ message: 'Player registered successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});




router.get('/', async (req, res) => {
  try {
    const registrations = await Registration.find()
      .populate('user', 'name email')
      .populate('event', 'title gameType date');

    res.json(registrations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;

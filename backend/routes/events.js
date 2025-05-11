const express = require('express');
const router = express.Router();
const Event = require('../models/Event');
const User = require('../models/User');

// 1. Get all events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find().populate('createdBy', 'name email');
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 2. Get event by ID
router.get('/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id).populate('createdBy', 'name email');
    if (!event) return res.status(404).json({ message: 'Event not found' });
    res.json(event);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 3. Get events by sport (gameType)
router.get('/sport/:sport', async (req, res) => {
  try {
    const sport = req.params.sport.toLowerCase();
    const events = await Event.find({ gameType: new RegExp(`^${sport}$`, 'i') });
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 4. Create a new event (POST)
router.post('/', async (req, res) => {
  const { title, description, gameType, location, date, maxPlayers, createdBy } = req.body;

  if (!title || !gameType || !location || !date || !maxPlayers || !createdBy) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const organizer = await User.findById(createdBy);
    if (!organizer || organizer.role !== 'organizer') {
      return res.status(403).json({ message: 'Only organizers can create events' });
    }

    const newEvent = new Event({
      title: title.trim(),
      description: description?.trim(),
      gameType: gameType.trim(),
      location: location.trim(),
      date,
      maxPlayers,
      createdBy
    });

    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 5. Update event fully
router.put('/:id', async (req, res) => {
  const { title, description, gameType, location, date, maxPlayers, createdBy } = req.body;

  if (!title || !gameType || !location || !date || !maxPlayers || !createdBy) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: 'Event not found' });

    event.title = title.trim();
    event.description = description?.trim();
    event.gameType = gameType.trim();
    event.location = location.trim();
    event.date = date;
    event.maxPlayers = maxPlayers;
    event.createdBy = createdBy;

    const updatedEvent = await event.save();
    res.json({ message: 'Event updated', event: updatedEvent });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 6. Update only location
router.put('/:id/location', async (req, res) => {
  const { location } = req.body;
  if (!location) return res.status(400).json({ message: 'Location is required' });

  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: 'Event not found' });

    event.location = location.trim();
    await event.save();
    res.json({ message: 'Location updated', event });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

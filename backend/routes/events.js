

const express = require('express');
const router = express.Router();

// Mock sports events (in-memory)
const mockEvents = [
  {
    id: '1',
    name: "Football Match",
    date: "2025-05-05",
    location: "Main Ground",
    sport: "Football",
    organizerId: "user123"
  },
  {
    id: '2',
    name: "Cricket Tournament",
    date: "2025-05-10",
    location: "Field A",
    sport: "Cricket",
    organizerId: "user456"
  },
  {
    id: '3',
    name: "Basketball League",
    date: "2025-05-15",
    location: "Indoor Court",
    sport: "Basketball",
    organizerId: "user123"
  }
];

// 1. Get all sports events
router.get('/', (req, res) => {
  res.json(mockEvents);
});

// 2. Get a single event by ID
router.get('/:id', (req, res) => {
  const event = mockEvents.find(e => e.id === req.params.id);
  if (event) {
    res.json(event);
  } else {
    res.status(404).json({ message: 'Event not found' });
  }
});

// 3. Get events by sport type (e.g., Football, Cricket)
router.get('/sport/:sport', (req, res) => {
  const sport = req.params.sport.toLowerCase();
  const filteredEvents = mockEvents.filter(e => e.sport.toLowerCase() === sport);
  res.json(filteredEvents);
});

// 4. POST - Add a new sports event
router.post('/', (req, res) => {
  const { name, date, location, sport, organizerId } = req.body;

  // Validation
  if (!name || !date || !location || !sport || !organizerId) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const allowedSports = ['football', 'cricket', 'basketball', 'badminton', 'volleyball'];
  if (!allowedSports.includes(sport.toLowerCase())) {
    return res.status(400).json({ message: 'Only sports events are allowed in UniPlay' });
  }

  const newEvent = {
    id: (mockEvents.length + 1).toString(),
    name: name.trim(),
    date,
    location: location.trim(),
    sport: sport.trim(),
    organizerId: organizerId.trim()
  };

  mockEvents.push(newEvent);
  res.status(201).json(newEvent);
});

// 5. POST by organizer ID (alternative way to add an event for a specific organizer)
router.post('/organizer/:organizerId', (req, res) => {
  const { name, date, location, sport } = req.body;
  const organizerId = req.params.organizerId;

  if (!name || !date || !location || !sport) {
    return res.status(400).json({ message: 'All fields except organizerId in body are required' });
  }

  const allowedSports = ['football', 'cricket', 'basketball', 'badminton', 'volleyball'];
  if (!allowedSports.includes(sport.toLowerCase())) {
    return res.status(400).json({ message: 'Only sports events are allowed in UniPlay' });
  }

  const newEvent = {
    id: (mockEvents.length + 1).toString(),
    name: name.trim(),
    date,
    location: location.trim(),
    sport: sport.trim(),
    organizerId: organizerId.trim()
  };

  mockEvents.push(newEvent);
  res.status(201).json(newEvent);
});


// 6. PUT - Update a sports event by ID (full update)
router.put('/:id', (req, res) => {
  const eventId = req.params.id;
  const { name, date, location, sport, organizerId } = req.body;

  // Validation
  if (!name || !date || !location || !sport || !organizerId) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Date validation
  const isValidDate = !isNaN(Date.parse(date));
  if (!isValidDate) {
    return res.status(400).json({ message: 'Invalid date format' });
  }

  const allowedSports = ['football', 'cricket', 'basketball', 'badminton', 'volleyball'];
  if (!allowedSports.includes(sport.toLowerCase())) {
    return res.status(400).json({ message: 'Only sports events are allowed in UniPlay' });
  }

  const eventIndex = mockEvents.findIndex(e => e.id === eventId);
  if (eventIndex === -1) {
    return res.status(404).json({ message: 'Event not found' });
  }

  // Update event
  mockEvents[eventIndex] = {
    ...mockEvents[eventIndex],
    name: name.trim(),
    date,
    location: location.trim(),
    sport: sport.trim(),
    organizerId: organizerId.trim()
  };

  res.status(200).json({ message: 'Event updated successfully', event: mockEvents[eventIndex] });
});

// 7. PUT - Update only the location of a sports event by ID
router.put('/:id/location', (req, res) => {
  const eventId = req.params.id;
  const { location } = req.body;

  if (!location) {
    return res.status(400).json({ message: 'Location is required' });
  }

  const eventIndex = mockEvents.findIndex(e => e.id === eventId);
  if (eventIndex === -1) {
    return res.status(404).json({ message: 'Event not found' });
  }

  mockEvents[eventIndex].location = location.trim();

  res.status(200).json({ message: 'Event location updated successfully', event: mockEvents[eventIndex] });
});

  


  
module.exports = router;


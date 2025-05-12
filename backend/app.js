const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const headerValidation = require('./middleware/headerValidation');

const app = express();
const PORT = process.env.PORT || 5020;

// Middleware
app.use(cors());
app.use(express.json());
app.use(headerValidation);

// Routes
app.use('/api/events', require('./routes/events'));
app.use('/api/registrations', require('./routes/registrations'));

// Test route
app.get('/', (req, res) => {
  res.send('UniPlay API is running');
});


// DB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
})
.catch(err => console.log(err));

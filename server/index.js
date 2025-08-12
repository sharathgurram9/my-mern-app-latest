const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const userRoutes = require('./routes/userRoutes');


const app= express()
app.use(cors({
  origin: function (origin, callback) {
    callback(null, origin); // Echo back the requesting origin
  },
  credentials: true
}));
const PORT = process.env.PORT || 5000;




app.use(express.json());
app.use((req, res, next) => {
  console.log('Request from origin:', req.headers.origin);
  next();
});

// Test route
app.get('/', (req, res) => {
  res.send('Backend is working!');
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});
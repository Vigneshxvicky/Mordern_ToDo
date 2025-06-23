const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const todoRoutes = require('./routes/todos');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API routes
app.use('/api/todos', todoRoutes);

// Get MongoDB URI from environment variables
const MONGODB_URI = process.env.MONGO_URI;

// MongoDB connection (ensure your MongoDB server is running)
mongoose
  .connect(MONGODB_URI, {
    // useNewUrlParser and useUnifiedTopology are deprecated in Mongoose 6.x and later
    // You can remove them if you are using a recent Mongoose version (7.x is current)
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
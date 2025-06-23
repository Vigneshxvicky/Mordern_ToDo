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

// MongoDB connection (ensure your MongoDB server is running)
mongoose
  .connect('mongodb://localhost:27017/todoapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
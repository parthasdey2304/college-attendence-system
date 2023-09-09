const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Replace 'your-database-uri' with your actual MongoDB URI
const mongoURI = 'mongodb://localhost:27017/your-database-name';

// Add middleware and routes here
app.get('/', (req, res) => {
    res.sendFile("index.html")
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
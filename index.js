require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL

// Connect to DB
mongoose.connect(mongoString);
const database = mongoose.connection;

// Test connection
database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database connected!');
})

// Transfer the content of Express into constant app
const app = express();

// Parse incoming requests with JSON payloads
app.use(express.json());

// Listen on port defined on .env file or use 3001
const listener = app.listen(process.env.PORT || 3001, () => {
    console.log('App started and listening on port ' + listener.address().port)
})

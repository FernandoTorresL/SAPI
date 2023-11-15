require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL
const routes = require('./routes/routes');
const helmet = require('helmet');
const compression = require('compression');

// Connect to DB
mongoose.connect(mongoString, {
    server: {
        socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 }
    },
    replset: {
        socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 }
    }
});
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

app.use(helmet());
app.use(compression()); //Compress all routes

// Parse incoming requests with JSON payloads
app.use(express.json());

// All our endpoints will start with '/sub'.
app.use('/api/sub', routes);

// Listen on port defined on .env file or use 3001
const listener = app.listen(process.env.PORT || 3001, () => {
    console.log('App started and listening on port ' + listener.address().port)
})

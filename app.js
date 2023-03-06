// Require application dependencies
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connect = require('./config/connect');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');

// Connect to database
connect();

// Use CORS, JSON, UrlEncoded, and route for application
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', require('./route'));

// Listens to port and logs event to the console
mongoose.connection.once('open', () => {
    app.listen(port, () => console.log(`App listening on port ${port}`));
});
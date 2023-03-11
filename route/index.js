// Create the router object
const route = require('express').Router();

// Handles routes for project
route.use('/api-docs', require('./swagger'));
route.use('/journal', require('./journal'));
route.use('/note', require('./note'));
route.use('/topic', require('./topic'));
route.use('/user', require('./user'));
route.use('/auth/github', (req, res) => res.send('OAuth placeholder'));

// Handles any http GET requests
route.get('/', require('../controller/index'));
route.get('/login', (req, res) => {
    // #swagger.tags = ['Authentication']
    res.send('Login placeholder');});
route.get('/logout', (req, res) => {
    // #swagger.tags = ['Authentication']
    res.send('Logout placeholder')});

// Export route object
module.exports = route;
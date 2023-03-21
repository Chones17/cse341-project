// Create the router object
const route = require('express').Router();
const controller = require('../controller/index');


// Handles routes for project
route.use('/api-docs', require('./swagger'));
route.use('/auth', require('./auth'));
route.use('/journal', require('./journal'));
route.use('/note', require('./note'));
route.use('/topic', require('./topic'));
route.use('/user', require('./user'));

// Handles any http GET requests
route.get('/', controller.index);
route.get('/login', controller.login);
route.get('/logout', controller.logout);

// Export route object
module.exports = route;
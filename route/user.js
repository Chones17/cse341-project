// Require the User router, validation middleware, and controller
const route = require('express').Router();
const controller = require('../controller/user');

// Handles any http GET requests
route.get('/', controller.getUsers);
route.get('/:id', controller.getUser);

// Handles any http POST requests
route.post('/', controller.createUser);

// Handles any http PUT requests
route.put('/:id', controller.updateUser);

// Handles any http DELETE requests
route.delete('/:id', controller.deleteUser);

// Export route object
module.exports = route;
// Require the Note router, validation middleware, and controller
const route = require('express').Router();
const controller = require('../controller/note');

// Handles any http GET requests
route.get('/', auth, controller.getNotes);
route.get('/:id', auth, controller.getNote);

// Handles any http POST requests
route.post('/', controller.createNote);

// Handles any http PUT requests
route.put('/:id', controller.updateNote);

// Handles any http DELETE requests
route.delete('/:id', auth, controller.deleteNote);

// Export route object
module.exports = route;
// Require the Journal router, validation middleware, and controller
const route = require('express').Router();
const controller = require('../controller/journal');

// Handles any http GET requests
route.get('/', controller.getJournals);
route.get('/:id', controller.getJournal);

// Handles any http POST requests
route.post('/', controller.createJournal);

// Handles any http PUT requests
route.put('/:id', controller.updateJournal);

// Handles any http DELETE requests
route.delete('/:id', controller.deleteJournal);

// Export route object
module.exports = route;
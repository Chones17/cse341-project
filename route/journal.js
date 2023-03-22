// Require the Journal router, validation middleware, and controller
const route = require('express').Router();
const controller = require('../controller/journal');

//validation
const validation = require('../middleware/validate');

// Handles any http GET requests
route.get('/', auth, controller.getJournals);
route.get('/:id', auth, controller.getJournal);

// Handles any http POST requests
route.post('/', validation.saveJournal, controller.createJournal);

// Handles any http PUT requests
route.put('/:id', validation.saveJournal, controller.updateJournal);

// Handles any http DELETE requests
route.delete('/:id', auth, controller.deleteJournal);

// Export route object
module.exports = route;
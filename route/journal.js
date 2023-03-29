// Require the Journal router, validation middleware, and controller
const route = require('express').Router();
const controller = require('../controller/journal');
const auth = require('../middleware/auth');

//validation
const validation = require('../middleware/validate');

// Handles any http GET requests
route.get('/', auth, controller.getJournals);
route.get('/:id', auth, controller.getJournal);

// Handles any http POST requests
route.post('/', auth, validation.saveJournal, controller.postJournal);

// Handles any http PUT requests
route.put('/:id', auth, validation.saveJournal, controller.putJournal);

// Handles any http DELETE requests
route.delete('/:id', auth, controller.deleteJournal);

// Export route object
module.exports = route;
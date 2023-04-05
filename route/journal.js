// Require the Journal router, validation middleware, and controller
const route = require('express').Router();
const controller = require('../controller/journal');
const auth = require('../middleware/auth');
const validate = require('../middleware/validate');

// Handles any http GET requests
route.get('/', auth, controller.getJournals);
route.get('/:id', auth, validate.id, validate.results, controller.getJournal);

// Handles any http POST requests
route.post('/', auth, 
    validate.title, 
    validate.description, 
    validate.createDate,
    validate.results,
    controller.postJournal);

// Handles any http PUT requests
route.put('/:id', auth,
    validate.id,
    validate.title,
    validate.description,
    validate.createDate,
    validate.results,
    controller.putJournal);

// Handles any http DELETE requests
route.delete('/:id', auth, validate.id, validate.results, controller.deleteJournal);

// Export route object
module.exports = route;
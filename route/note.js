// Require the Note router, validation middleware, and controller
const route = require('express').Router();
const controller = require('../controller/note');
const auth = require('../middleware/auth');
const validate = require('../middleware/validate');

// Handles any http GET requests
route.get('/', auth, controller.getNotes);
route.get('/:id', auth, validate.id, validate.results, controller.getNote);

// Handles any http POST requests
route.post('/', auth,
    validate.entryDate,
    validate.canon,
    validate.book,
    validate.chapter,
    validate.verse,
    validate.note,
    validate.results,
    controller.postNote);

// Handles any http PUT requests
route.put('/:id', auth,
    validate.id,
    validate.entryDate,
    validate.canon,
    validate.book,
    validate.chapter,
    validate.verse,
    validate.note,
    validate.results,
    controller.putNote);

// Handles any http DELETE requests
route.delete('/:id', auth, validate.id, validate.results, controller.deleteNote);

// Export route object
module.exports = route;
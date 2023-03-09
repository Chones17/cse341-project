const express = require('express');
const entryController = require('../controller/note');
const route = express.Router();


route.get('/', entryController.getNotes);
route.get('/:id', entryController.getNote);

route.post('/', entryController.createNote);

route.put('/:id', entryController.updateNote);
// route.delete('/:id', entryController.deleteEntry);

module.exports = route;

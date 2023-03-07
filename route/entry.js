const express = require('express');
const entryController = require('../controller/entry');
const route = express.Router();


route.get('/', entryController.getEntries);
route.get('/:id', entryController.getEntry);

// route.post('/', entryController.createEntry);

// route.put('/:id', entryController.updateEntry);
// route.delete('/:id', entryController.deleteEntry);

module.exports = route;

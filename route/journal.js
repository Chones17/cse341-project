const express = require('express');
const journalController = require('../controller/journal');
const route = express.Router();


route.get('/', journalController.getJournals);
route.get('/:id', journalController.getJournal);

// route.post('/', journalController.createJournal);

// route.put('/:id', journalController.updateJournal);
// route.delete('/:id', journalController.deleteJournal);

module.exports = route;

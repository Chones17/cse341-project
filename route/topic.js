// Require the Topic router, validation middleware, and controller
const route = require('express').Router();
const controller = require('../controller/topic');

//validation
const validation = require('../middleware/validate');

// Handles any http GET requests
route.get('/', controller.getTopics);

// Handles any http POST requests
route.post('/', validation.saveTopic, controller.createTopic);

// Handles any http PUT requests
route.put('/:id', validation.saveTopic, controller.updateTopic);

// Handles any http DELETE requests
route.delete('/:id', controller.deleteTopic);

// Export route object
module.exports = route;
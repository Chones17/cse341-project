// Require the Topic router, validation middleware, and controller
const route = require('express').Router();
const controller = require('../controller/topic');
const auth = require('../middleware/auth');

// Handles any http GET requests
route.get('/', auth, controller.getTopics);

// Handles any http POST requests
route.post('/', auth, controller.postTopic);

// Handles any http PUT requests
route.put('/:id', auth, controller.putTopic);

// Handles any http DELETE requests
route.delete('/:id', auth, controller.deleteTopic);

// Export route object
module.exports = route;
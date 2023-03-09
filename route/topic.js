const express = require('express');
const topicController = require('../controller/topic');
const route = express.Router();


route.get('/', topicController.getTopics);
route.get('/:id', topicController.getTopic);

route.post('/', topicController.createTopic);

// route.put('/:id', topicController.updateTopic);
// route.delete('/:id', topicController.deleteTopic);

module.exports = route;

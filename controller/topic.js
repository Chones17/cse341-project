// Require the Topic model
const Topic = require("../model/Topic");

/**
 * Controller function to retrieve all Topics
 * @param { object } req - The HTTP request
 * @param { object } res - The HTTP response
 */
const getTopics = async (req, res) => {
    
    // #swagger.tags = ['Topic']

    await Topic.find().exec().then(results => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200);
        res.json(results);
    }).catch(error => {
        res.status(500);
        res.json(error || 'An error occured while sending the request.');
    });
}

/**
 * Controller function to add a Topic
 * @param { object } req - The HTTP request
 * @param { object } res - The HTTP response
 */
const postTopic = async (req, res) => {
    
    // #swagger.tags = ['Topic']

    // Set the request body
    const topic = {
        topic: req.body.topic,
    };
    
    await Topic.create(topic).then(() => {
        res.status(201);
        res.send();
    }).catch(error => {
        res.status(500);
        res.json(error || 'An error occured while sending the request.');
    });
}

/**
 * Controller function to update Topic
 * @param { object } req - The HTTP request
 * @param { object } res - The HTTP response
 */
const putTopic = async (req, res) => {

    // #swagger.tags = ['Topic']

    // Set the request body
    const topic = {
        topic: req.body.topic,
    };

    await Topic.updateOne({ _id: req.params.id }, topic).then(() => {
        res.status(204);
        res.send();
    }).catch(error => {
        res.status(500);
        res.json(error || 'An error occurred while sending the request.');
    });
}

/**
 * Controller function to delete a Topic
 * @param { object } req - The HTTP request
 * @param { object } res - The HTTP response
 */
const deleteTopic = async (req, res) => {

    // #swagger.tags = ['Topic']

    await Topic.deleteOne({ _id: req.params.id }).then(() => {
        res.status(200);
        res.send();
    }).catch(error => {
        res.status(500);
        res.json(error || 'An error occurred while sending the request.');
    });
}

// Export Topic controller functions
module.exports = { getTopics, postTopic, putTopic, deleteTopic };
// Require the Journal model
const Journal = require("../model/Journal");

/**
 * Controller function to retrieve all Journals
 * @param { object } req - The HTTP request
 * @param { object } res - The HTTP response
 */
const getJournals = async (req, res) => {
    
    // #swagger.tags = ['Journal']

    await Journal.find().exec().then(results => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200);
        res.json(results);
    }).catch(error => {
        res.status(500);
        res.json(error || 'An error occured while sending the request.');
    });
}

/**
 * Controller function to retrieve a Journal
 * @param { object } req - The HTTP request
 * @param { object } res - The HTTP response
 */
const getJournal = async (req, res) => {
    
    // #swagger.tags = ['Journal']

    await Journal.findOne({ _id: req.params.id }).exec().then(results => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200);
        res.json(results);
    }).catch(error => {
        res.status(500);
        res.json(error || 'An error occured while sending the request.');
    });
}

/**
 * Controller function to add a Journal
 * @param { object } req - The HTTP request
 * @param { object } res - The HTTP response
 */
const postJournal = async (req, res) => {
    
    // #swagger.tags = ['Journal']

    // Set the request body
    const journal = {
        title: req.body.title,
        description: req.body.description,
        createDate: req.body.createDate
    };
    
    await Journal.create(journal).then(() => {
        res.status(201);
        res.send();
    }).catch(error => {
        res.status(500);
        res.json(error || 'An error occured while sending the request.');
    });
}

/**
 * Controller function to update Journal
 * @param { object } req - The HTTP request
 * @param { object } res - The HTTP response
 */
const putJournal = async (req, res) => {

    // #swagger.tags = ['Journal']

    // Set the request body
    const journal = {
        title: req.body.title,
        description: req.body.description,
        createDate: req.body.createDate
    };

    await Journal.updateOne({ _id: req.params.id }, journal).then(() => {
        res.status(204);
        res.send();
    }).catch(error => {
        res.status(500);
        res.json(error || 'An error occurred while sending the request.');
    });
}

/**
 * Controller function to delete a Note
 * @param { object } req - The HTTP request
 * @param { object } res - The HTTP response
 */
const deleteJournal = async (req, res) => {

    // #swagger.tags = ['Journal']

    await Journal.deleteOne({ _id: req.params.id }).then(() => {
        res.status(200);
        res.send();
    }).catch(error => {
        res.status(500);
        res.json(error || 'An error occurred while sending the request.');
    });
}

// Export Journal controller functions
module.exports = { getJournals, getJournal, postJournal, putJournal, deleteJournal };
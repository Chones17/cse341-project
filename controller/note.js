// Require the Note model
const Note = require("../model/Note");

/**
 * Controller function to retrieve all Notes
 * @param { object } req - The HTTP request
 * @param { object } res - The HTTP response
 */
const getNotes = async (req, res) => {
  
    // #swagger.tags = ['Note']

    await Note.find().exec().then(results => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200);
        res.json(results);
    }).catch(error => {
        res.status(500);
        res.json(error || 'An error occured while sending the request.');
    });
};

/**
 * Controller function to retrieve a Note
 * @param { object } req - The HTTP request
 * @param { object } res - The HTTP response
*/
const getNote = async (req, res) => {
  
    // #swagger.tags = ['Note']

    await Note.findOne({ _id: req.params.id }).exec().then(results => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200);
        res.json(results);
    }).catch(error => {
        res.status(500);
        res.json(error || 'An error occured while sending the request.');
    });
};

/**
 * Controller function to add a Note
 * @param { object } req - The HTTP request
 * @param { object } res - The HTTP response
 */
const postNote = async (req, res) => {
    
    // #swagger.tags = ['Note']

    // Set the request body
    const note = {
        entryDate: req.body.entryDate,
        canon: req.body.canon,
        book: req.body.book,
        chapter: req.body.chapter,
        verse: req.body.verse,
        note: req.body.note,
    };
    
    await Note.create(note).then(() => {
        res.status(201);
        res.send();
    }).catch(error => {
        res.status(500);
        res.json(error || 'An error occured while sending the request.');
    });
}

/**
 * Controller function to update Note
 * @param { object } req - The HTTP request
 * @param { object } res - The HTTP response
 */
const putNote = async (req, res) => {

    // #swagger.tags = ['Note']

    // Set the request body
    const note = {
        entryDate: req.body.entryDate,
        canon: req.body.canon,
        book: req.body.book,
        chapter: req.body.chapter,
        verse: req.body.verse,
        note: req.body.note,
    };

    await Note.updateOne({ _id: req.params.id }, note).then(() => {
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
const deleteNote = async (req, res) => {

    // #swagger.tags = ['Note']

    await Note.deleteOne({ _id: req.params.id }).then(() => {
        res.status(200);
        res.send();
    }).catch(error => {
        res.status(500);
        res.json(error || 'An error occurred while sending the request.');
    });
}

// Export Note controller functions
module.exports = { getNotes, getNote, postNote, putNote, deleteNote };
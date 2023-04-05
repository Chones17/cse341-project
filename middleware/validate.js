// Require Express-Validator
const { param, body, validationResult } = require('express-validator');

// Define Validation Chain API
const id = param('id', 'Invalid MongoID').isMongoId();
const title = body('title', 'Invalid Title').isString();
const description = body('description', 'Invalid Description').isString();
const createDate = body('createDate', 'Invalid Date').isDate({format: "MM/DD/YYYY"});
const entryDate = body('createDate', 'Invalid Date').isDate({format: "MM/DD/YYYY"});
const canon = body('canon', 'Invalid Canon').isString();     
const book = body('book', 'Invalid Book').isString();    
const chapter = body('chapter', 'Invalid Chapter').isInt();       
const verse = body('verse', 'Invalid Verse').isInt();     
const note = body('note', 'Invalid note').isString();
const topic = body('topic', 'Invalid Topic').isString();
const githubId = body('githubId', 'Invalid GitHub ID').isString();
const userName = body('userName', 'Invalid Userame').isString();
const email = body('email', 'Invalid Email').isEmail();

// GET route validation
const results = (req, res, next) => {

    // Return GET validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400);
        res.json({ errors: errors.array() });
    } else {
        next();
    }
}

// Export validation function
module.exports = { 
    id,
    title,
    description,
    createDate,
    entryDate,
    canon,
    book,
    chapter,
    verse,
    note,
    topic,
    githubId,
    userName,
    email,
    results
};
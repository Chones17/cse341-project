// Require Mongoose Schema object and model method
const { Schema, model } = require('mongoose');

// Create Journal Schema
const journalSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createDate: {
        type: Date,
        required: true
    }
});

// Export Journal Schema
module.exports = model('Journal', journalSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    entryDate: {
        type: Date,
        required: true
    },
    canon: {
        type: String,
        enum: [
            'Old Testament',
            'New Testament',
            'Book of Mormon',
            'Doctrine and Covenants',
            'Pearl of Great Price'
        ],
        required: true
    },
    book: {
        type: String,
        required: true
    },
    chapter: {
        type: Number,
        min: 0,
        max: 150,
        required: true
    },
    verse: {
        type: Number,
        min: 0,
        max: 176,
        required: true
    },
    note: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Note', noteSchema);
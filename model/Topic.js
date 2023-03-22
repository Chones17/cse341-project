// Require Mongoose Schema object and model method
const { Schema, model } = require('mongoose');

// Create Topic Schema
const topicSchema = new Schema({
    topic: {
        type: String,
        required: true
    }
})

// Export Topic Schema
module.exports = model('Topic', topicSchema);
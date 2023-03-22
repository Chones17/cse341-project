// Require Mongoose Schema object and model method
const { Schema, model } = require('mongoose');
const findOrCreate = require('mongoose-findorcreate');

// Create User Schema
const userSchema = new Schema({
    githubId: {
        type: String,
        required: true
    },
    userName: {
        type: String
    },
    email: {
        type: String
    }
});

// Export User Schema
module.exports = model('User', userSchema.plugin(findOrCreate));
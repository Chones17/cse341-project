const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
})

module.exports = mongoose.model('User', userSchema);
// Require the User model
const User = require("../model/User");

/**
 * Controller function to retrieve all Users
 * @param { object } req - The HTTP request
 * @param { object } res - The HTTP response
 */
const getUsers = async (req, res) => {
    
    // #swagger.tags = ['User']

    await User.find().exec().then(results => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200);
        res.json(results);
    }).catch(error => {
        res.status(500);
        res.json(error || 'An error occured while sending the request.');
    });
}

/**
 * Controller function to retrieve a User
 * @param { object } req - The HTTP request
 * @param { object } res - The HTTP response
 */
const getUser = async (req, res) => {
    
    // #swagger.tags = ['User']

    await User.findOne({ _id: req.params.id }).exec().then(results => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200);
        res.json(results);
    }).catch(error => {
        res.status(500);
        res.json(error || 'An error occured while sending the request.');
    });
}

/**
 * Controller function to add a User
 * @param { object } req - The HTTP request
 * @param { object } res - The HTTP response
 */
const postUser = async (req, res) => {
    
    // #swagger.tags = ['User']

    // Set the request body
    const User = {
        githubId: req.body.githubId,
        userName: req.body.userName,
        email: req.body.email
    };
    
    await User.create(User).then(() => {
        res.status(201);
        res.send();
    }).catch(error => {
        res.status(500);
        res.json(error || 'An error occured while sending the request.');
    });
}

/**
 * Controller function to update User
 * @param { object } req - The HTTP request
 * @param { object } res - The HTTP response
 */
const putUser = async (req, res) => {

    // #swagger.tags = ['User']

    // Set the request body
    const User = {
        githubId: req.body.githubId,
        userName: req.body.userName,
        email: req.body.email
    };

    await User.updateOne({ _id: req.params.id }, User).then(() => {
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
const deleteUser = async (req, res) => {

    // #swagger.tags = ['User']

    await User.deleteOne({ _id: req.params.id }).then(() => {
        res.status(200);
        res.send();
    }).catch(error => {
        res.status(500);
        res.json(error || 'An error occurred while sending the request.');
    });
}

// Export User controller functions
module.exports = { getUsers, getUser, postUser, putUser, deleteUser };
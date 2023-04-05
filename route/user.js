// Require the User router, validation middleware, and controller
const route = require('express').Router();
const controller = require('../controller/user');
const auth = require('../middleware/auth');
const validate = require('../middleware/validate');

// Handles any http GET requests
route.get('/', auth, controller.getUsers);
route.get('/:id', auth, validate.id, validate.results, controller.getUser);

// Handles any http POST requests
route.post('/', auth, 
    validate.githubId, 
    validate.userName, 
    validate.email,
    validate.results,
    controller.postUser);

// Handles any http PUT requests
route.put('/:id', auth, 
    validate.id,
    validate.githubId, 
    validate.userName, 
    validate.email,
    validate.results,
    controller.putUser);

// Handles any http DELETE requests
route.delete('/:id', auth, validate.id, validate.results, controller.deleteUser);

// Export route object
module.exports = route;
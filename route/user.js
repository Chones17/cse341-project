// Require the User router, validation middleware, and controller
const route = require('express').Router();
const controller = require('../controller/user');
const auth = require('../middleware/auth');

//validation
const validation = require('../middleware/validate');

// Handles any http GET requests
route.get('/', auth, controller.getUsers);
route.get('/:id', auth, controller.getUser);

// Handles any http POST requests
route.post('/', auth, validation.saveUser, controller.postUser);

// Handles any http PUT requests
route.put('/:id', auth, validation.saveUser, controller.putUser);

// Handles any http DELETE requests
route.delete('/:id', auth, controller.deleteUser);

// Export route object
module.exports = route;
const express = require('express');
const userController = require('../controller/user');
const route = express.Router();


route.get('/', userController.getUsers);
route.get('/:id', userController.getUser);

route.post('/', userController.createUser);

// route.put('/:id', userController.updateUser);
// route.delete('/:id', userController.deleteUser);

module.exports = route;

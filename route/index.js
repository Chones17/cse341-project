const route = require('express').Router();

route.get('/', require('../controller'));

module.exports = route;
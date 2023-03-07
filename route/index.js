const route = require('express').Router();

route.get('/', require('../controller/index'));

module.exports = route;
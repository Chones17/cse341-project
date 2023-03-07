const route = require('express').Router();

route.get('/', require('../controller/index'));
route.get('/journal', require('../controller/journal'));
route.get('/entry', require('../controller/entry'));
route.get('/topic', require('../controller/topic'));
route.get('/user', require('../controller/user'));

module.exports = route;
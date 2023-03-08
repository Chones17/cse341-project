const route = require('express').Router();

route.get('/', require('../controller/index'));
route.use('/', require('./swagger'));
route.get('/journal', require('../route/journal'));
route.get('/entry', require('../route/entry'));
route.get('/topic', require('../route/topic'));
route.get('/user', require('../route/user'));

module.exports = route;
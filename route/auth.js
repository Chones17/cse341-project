// Create the router object
const route = require('express').Router();
const passport = require('passport');

// Handles and GET HTTP requests
route.get('/github', passport.authenticate('github', { scope: [ 'user:email' ] }), 
        (req, res) => { /* #swagger.ignore = true */ });
route.get('/github/callback', passport.authenticate('github', { 
        successRedirect: '/', 
        failureRedirect: '/login' }), (req, res) => { /* #swagger.ignore = true */ });

// Export route object
module.exports = route;
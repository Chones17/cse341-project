// Create the router object
const route = require('express').Router();
const passport = require('passport');

// Handles and GET HTTP requests
route.get('/github', passport.authenticate('github', { scope: [ 'user:email' ] }));
route.get('/github/callback', passport.authenticate('github', { 
        successRedirect: '/',
        failureRedirect: '/login' }));

// Export route object
module.exports = route;
// Create the router object
const route = require('express').Router();
const passport = require('passport');

// Add Authentication tags to route
const auth = (req, res) => {

        // #swagger.ignore = true
}

// Handles and GET HTTP requests
route.get('/github', passport.authenticate('github', { scope: [ 'user:email' ] }), auth);
route.get('/github/callback', passport.authenticate('github', { 
        successRedirect: '/',
        failureRedirect: '/login' }), auth);

// Export route object
module.exports = route;
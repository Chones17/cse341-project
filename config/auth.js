// Require Passport, User model, and Auth strategy
const passport = require('passport');
const User = require('../model/User');
const GitHubStrategy = require('passport-github2').Strategy;

/**
 * Authentication configuration
 */
const auth = () => {

    // Serialize and deserialize user session
    passport.serializeUser((user, done) => done(null, user.id));
    passport.deserializeUser((id, done) => {
        User.findById(id, (error, user) => done(error, user));
    });


    // Passport configuration
    passport.use(new GitHubStrategy({
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: 'http://localhost:3000/auth/github/callback'
        //callbackURL: 'https://cse341-project-production.onrender.com/auth/github/callback'
    },
    (accessToken, refreshToken, profile, done) => {
        User.findOrCreate({ githubId: profile.id }, function (err, user) {
            return done(err, user);
    })}));
}

module.exports = auth;
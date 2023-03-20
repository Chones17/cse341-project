/**
 * Validates route has been authenticated
 * @param { object } req - The HTTP request 
 * @param { object } res - The HTTP response
 * @param { object } next - The next callback
 * @returns next callback
 */
const authenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.redirect('/login');
    }
}

// Export authentication status
module.exports = authenticated;
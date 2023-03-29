const path = require('path');

/**
 * Controller function for application
 * @param { object } req - The HTTP request
 * @param { object } res - The HTTP response
 */
const index = async (req, res) => {

    // #swagger.ignore = true

    await res.status(200).send('This is the home page.');
}

/**
 * Controller function for login
 * @param { object } req - The HTTP request
 * @param { object } res - The HTTP response
 */
const login = async (req, res) => {

    // #swagger.tags = ['Authentication']
    try {
        await res.sendFile(path.join(__dirname, '../static/index.html'));
    } catch(error) {
        res.status(500);
        res.json(error || 'An error occurred while sending the request.');
    }
}

/**
 * Controller function for logout
 * @param { object } req - The HTTP request
 * @param { object } res - The HTTP response
 */
const logout = async (req, res) => {

    // #swagger.tags = ['Authentication']

    try {
        await req.logout(() => res.status(200).redirect('/login'));
    } catch(error) {
        res.status(500);
        res.json(error || 'An error occurred while sending the request.');
    }
}

// Export Index objects
module.exports = { index, login, logout };
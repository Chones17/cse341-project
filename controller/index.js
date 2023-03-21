/**
 * Controller function for application
 * @param { object } req - The HTTP request
 * @param { object } res - The HTTP response
 */
const path = require('path');
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
    //await res.status(200).send('This is the login page.');
    await res.sendFile(path.join(__dirname, '../static/index.html'));
}

/**
 * Controller function for logout
 * @param { object } req - The HTTP request
 * @param { object } res - The HTTP response
 */
const logout = async (req, res) => {

    // #swagger.tags = ['Authentication']

    await req.logout(() => res.status(200).redirect('/login'));
}

// Export Index objects
module.exports = { index, login, logout };
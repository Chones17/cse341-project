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

    await res.status(200).send('This is the login page.');
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
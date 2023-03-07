const home = async (req, res) => {
    await res.send('This is the home page.');
}

module.exports = home;
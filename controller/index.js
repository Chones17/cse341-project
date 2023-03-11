const home = async (req, res) => {
    await res.status(200).send('This is the home page.');
}

module.exports = home;
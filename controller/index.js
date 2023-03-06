const index = async (req, res) => {
    await res.send('This is the home page.');
}

module.exports = index;
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
const app = require('./app');

// Listens to port and logs event to the console
mongoose.connection.once('open', () => {
    app.listen(port, () => console.log(`App listening on port ${port}`));
});
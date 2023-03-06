// Require Mongoose to make database connection
const mongoose = require('mongoose');

/**
 * Create a connection with MongoDB
 */
const connect = async () => {

    try {

        // Establish a connection with MongoDB using Mongoose
        const connect = await mongoose.connect(process.env.MONGODB_URI);

        // Log the database connection
        console.log(`MongoDB Connected: ${connect.connection.host}`);

    } catch(error) {

        // Handle connection errors
        console.error(error);
        process.exit(1);
    } 
}

// Export database connection
module.exports = connect;
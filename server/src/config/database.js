const mongoose = require('mongoose');
const config = require('../config/env');
const logger = require('../utils/logger');

/**
 * MongoDB connection options
 */
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

/**
 * Connects to MongoDB database
 * @returns {Promise} MongoDB connection
 */
const connectDB = async () => {
  try {
    const connection = await mongoose.connect(config.databaseURL, options);
    logger.info(`MongoDB Connected: ${connection.connection.host}`);
    return connection;
  } catch (error) {
    logger.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

/**
 * Disconnects from MongoDB database
 * @returns {Promise} Disconnection result
 */
const disconnectDB = async () => {
  try {
    await mongoose.disconnect();
    logger.info('MongoDB disconnected');
  } catch (error) {
    logger.error(`Error disconnecting from MongoDB: ${error.message}`);
  }
};

module.exports = {
  connectDB,
  disconnectDB,
};

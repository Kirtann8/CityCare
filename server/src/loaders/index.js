const expressLoader = require('./express');
const { connectDB } = require('../config/database');
const logger = require('../utils/logger');
const { setupWebPush } = require('../services/pushNotificationService');

/**
 * Initialize all loaders
 * @param {object} app - Express application
 */
const initializeLoaders = async (app) => {
  try {
    // Connect to database
    await connectDB();
    logger.info('Database connected');
    
    // Initialize express middleware and routes
    expressLoader(app);
    logger.info('Express initialized');
    
    // Initialize web push notifications
    setupWebPush();
    
    // Add other loaders here (socket.io, redis, etc.)
    
    logger.info('All modules loaded successfully');
  } catch (error) {
    logger.error(`Error during initialization: ${error.message}`);
    throw error;
  }
};

module.exports = initializeLoaders;

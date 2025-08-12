const app = require('./src/app');
const config = require('./src/config/env');
const logger = require('./src/utils/logger');
const initializeLoaders = require('./src/loaders');

/**
 * Start Express server.
 */
const startServer = async () => {
  try {
    // Initialize all loaders
    await initializeLoaders(app);
    
    // Start the server
    const server = app.listen(config.port, () => {
      logger.info(`Server running in ${config.env} mode on port ${config.port}`);
      logger.info(`Access API at http://localhost:${config.port}${config.api.prefix}`);
    });
    
    // Handle unhandled promise rejections
    process.on('unhandledRejection', (err) => {
      logger.error(`Unhandled Rejection: ${err.message}`);
      // Close server & exit process
      server.close(() => process.exit(1));
    });
    
    // Handle SIGTERM signal
    process.on('SIGTERM', () => {
      logger.info('SIGTERM received. Shutting down gracefully');
      server.close(() => {
        logger.info('Process terminated');
      });
    });
    
    return server;
  } catch (error) {
    logger.error(`Server error: ${error.message}`);
    process.exit(1);
  }
};

// Run the server
if (require.main === module) {
  startServer();
}

module.exports = { startServer };

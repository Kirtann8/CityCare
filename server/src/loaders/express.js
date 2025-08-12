const express = require('express');
const config = require('../config/env');
const logger = require('../utils/logger');

/**
 * Initialize express routes
 * @param {object} app - Express application
 */
const expressLoader = (app) => {
  try {
    // API Routes
    const authRoutes = require('../api/auth/routes');
    const issueRoutes = require('../api/issues/routes');
    const notificationRoutes = require('../api/notifications/routes');
    const analyticsRoutes = require('../api/analytics/routes');
    
    // Apply API prefix
    const router = express.Router();
    
    // Register routes
    router.use('/auth', authRoutes);
    router.use('/issues', issueRoutes);
    router.use('/notifications', notificationRoutes);
    router.use('/analytics', analyticsRoutes);
    
    // Apply routes to app
    app.use(config.api.prefix, router);
    
    // Handle 404 errors
    app.use((req, res) => {
      res.status(404).json({ message: 'Not found' });
    });
    
    logger.info('Express routes initialized');
  } catch (error) {
    logger.error(`Error initializing express routes: ${error.message}`);
    throw error;
  }
};

module.exports = expressLoader;

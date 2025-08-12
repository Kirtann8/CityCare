const webpush = require('web-push');
const config = require('../config/env');
const logger = require('../utils/logger');

/**
 * Configure web push notification service
 */
const setupWebPush = () => {
  // Set VAPID details
  try {
    webpush.setVapidDetails(
      'mailto:' + config.email.user,
      config.vapid.publicKey,
      config.vapid.privateKey
    );
    logger.info('Web Push notifications configured successfully');
  } catch (error) {
    logger.error(`Failed to configure Web Push: ${error.message}`);
  }
};

/**
 * Send push notification to a subscription
 * @param {Object} subscription - Push subscription object from client
 * @param {Object} payload - Notification payload
 * @returns {Promise} Send result
 */
const sendNotification = async (subscription, payload) => {
  try {
    const result = await webpush.sendNotification(
      subscription,
      JSON.stringify(payload)
    );
    return result;
  } catch (error) {
    logger.error(`Push notification error: ${error.message}`);
    throw error;
  }
};

module.exports = {
  setupWebPush,
  sendNotification,
};

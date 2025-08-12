/**
 * API endpoints for managing push notifications
 */
const express = require('express');
const router = express.Router();
const { sendNotification } = require('../../services/pushNotificationService');

// Get notifications
router.get('/', (req, res) => {
  res.json({ message: 'Notifications API endpoint' });
});

// Store push subscription
router.post('/subscribe', async (req, res) => {
  try {
    const subscription = req.body;
    
    // In a real app, you would store this subscription in your database
    // associated with the user
    
    // Send a test notification
    const payload = {
      title: 'CityCare Notification',
      body: 'You have successfully subscribed to notifications!',
      icon: '/icons/notification-icon.png',
      data: {
        url: '/dashboard'
      }
    };
    
    await sendNotification(subscription, payload);
    
    res.status(201).json({ message: 'Subscription added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

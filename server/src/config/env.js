const dotenv = require('dotenv');
const path = require('path');

// Load environment variables from .env file
dotenv.config();

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  // Server configuration
  port: parseInt(process.env.PORT, 10) || 5000,
  env: process.env.NODE_ENV,
  
  // MongoDB configuration
  databaseURL: process.env.MONGODB_URI,
//   databaseTestURL: process.env.MONGODB_URI_TEST,
  
  // JWT Authentication
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiration: process.env.JWT_EXPIRATION,
  
  // Cloudinary configuration
  cloudinary: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_API_KEY,
    apiSecret: process.env.CLOUDINARY_API_SECRET,
  },
  
  // Email configuration
  email: {
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT, 10),
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  
  // Google Maps API
  googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
  
  // Push notifications
  vapid: {
    publicKey: process.env.VAPID_PUBLIC_KEY,
    privateKey: process.env.VAPID_PRIVATE_KEY,
  },
  
  // Logging
  logs: {
    level: process.env.LOG_LEVEL || 'info',
  },
  
  // API configuration
  api: {
    prefix: '/api/v1',
  },

  // Allowed CORS origins
  corsOrigins: process.env.CORS_ORIGINS 
    ? process.env.CORS_ORIGINS.split(',') 
    : ['http://localhost:3000'],
};

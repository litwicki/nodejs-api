const httpStatus = require('http-status');
const RefreshToken = require('../models/refreshToken.model');
const moment = require('moment-timezone');
const { jwtExpirationInterval } = require('../../config/vars');

exports.health = async (req, res, next) => {
  try {
    return res.json({
      message: 'Add a deep health check here..',
      date: new Date(),
    });
  } catch (error) {
    return next(error);
  }
};

const httpStatus = require('http-status');
const moment = require('moment-timezone');

/**
* Returns a simple online/offline response message
* @public
*/
exports.ping = async (req, res, next) => {
  try {
    const dt = moment.tz(new Date(), process.env.TIMEZONE);
    const pingDate = dt.format();
    return res.json({
      status: 'Online',
      message: '',
      date: pingDate,
      timezone: process.env.TIMEZONE,
    });
  } catch (error) {
    return res.json({
      message: 'Offline',
      date: moment().format('YYYY-mm-dd'),
    });
  }
};

/**
* Returns a detailed health check message
* @public
*/
exports.health = async (req, res, next) => {
  const dt = moment.tz(new Date(), process.env.TIMEZONE);
  const healthDate = dt.format();
  try {
    return res.json({
      status: 'Online',
      message: 'A detailed health message..',
      date: healthDate,
      timezone: process.env.TIMEZONE,
    });
  } catch (error) {
    return res.json({
      message: error.error,
      date: healthDate,
      timezone: process.env.TIMEZONE,
    });
  }
};

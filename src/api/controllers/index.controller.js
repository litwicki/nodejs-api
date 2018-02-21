const path = require('path');

/**
* Returns a simple landing home page
* @public
*/
exports.index = async (req, res, next) => {
  try {
    return res.sendFile('index.html', { root: path.join(__dirname, '../') });
  } catch (error) {
    return next(error);
  }
};

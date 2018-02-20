// make bluebird default Promise
Promise = require('bluebird'); // eslint-disable-line no-global-assign
const { port, env } = require('./config/vars');
const app = require('./config/express');
const mongoose = require('./config/mongoose');

// open mongoose connection
mongoose.connect();

if (!module.parent) {
  app.listen(3000, () => {
    console.info(`server started on port ${port} (${env})`);
  });
}

/**
* Exports express
* @public
*/
module.exports = app;

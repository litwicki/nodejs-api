const mongooseLib = require('mongoose');
const dotenv = require('dotenv-safe').config();

const Users = require('./src/seeders/users.seeder');

mongooseLib.Promise = global.Promise || Promise;

module.exports = {

  // Export the mongoose lib
  mongoose: mongooseLib,

  // Export the mongodb url
  mongoURL: process.env.MONGO_URI,

  /*
    Seeders List
    ------
    order is important
  */
  seedersList: {
    Users,
  }
};

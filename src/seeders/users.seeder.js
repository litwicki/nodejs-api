const Seeder = require('mongoose-data-seed').Seeder;
const Model = require('../api/models/user.model');
const faker = require('faker');

const data = [];
let i = 0;

for (i = 0; i < 10; i += 1) {
  data.push({
    email: faker.internet.email(),
    password: 'Password1!',
  });
}

console.log(data);

const UsersSeeder = Seeder.extend({
  shouldRun: () => Model.count().exec().then(count => count === 0),
  run: () => Model.create(data),
});

module.exports = UsersSeeder;

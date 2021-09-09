const { User } = require('../models');

const userdata = [
  {
    username: 'NewbieDev',
    email: 'user1@email.com',
    password: 'password1'
  },
  {
    username: 'CodeMonkey3000',
    email: 'user2@email.com',
    password: 'password2'
  },
  {
    username: 'ByteSize',
    email: 'user3@email.com',
    password: 'password3'
  },
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
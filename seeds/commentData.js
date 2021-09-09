const { Comment } = require('../models');

const commentdata = [
  {
    content: 'Nice! Thanks!',
    user_id: '2',
    blog_id: '1'
  },
  {
    content: 'true',
    user_id: '1',
    blog_id: '2'
  },
  {
    content: 'Good stuff!',
    user_id: '3',
    blog_id: '1'
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
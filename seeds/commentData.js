const { Comment } = require('../models');

const commentdata = [
  {
    content: 'Ksdf alsjvcba  ljbasd akljdc  ljaafkjbef akuuvbqkev asjbcaqvjbsc ljasbvcljadsv ljasbvjad ljbckakjscv jojbsdv',
    user_id: '2',
    blog_id: '1'
  },
  {
    content: 'Ksdf alsjdv',
    user_id: '1',
    blog_id: '2'
  },
  {
    content: 'Ksdf alsjvcba  ljbasd akljdc  ljaafkjbef akuuvbqkev asjbcaqvjbsc ljasbvcljadsvv jojbsdv',
    user_id: '3',
    blog_id: '1'
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
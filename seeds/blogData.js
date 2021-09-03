const { Blog } = require('../models');

const blogdata = [
  {
    title: 'BlahBlah',
    content: 'kjdbvc alsjvna ljasbvclj as alsjvcba  ljbasd akljdc  ljasc ljasbvcljadsv ljasbvjad ljbckakjscv jojbsdv',
    user_id: '1'
  },
  {
    title: 'FooBar',
    content: 'kjdbvc alsjvna ljasbvclj as alsjvcba  ljbasd akljdc  ljasc ljaqefa advgwdvb aqevasv asbvcljadsv ljasbvjad ljbckakjscv jojbsdv',
    user_id: '2'
  },
  {
    title: 'Uhhhhhhhh',
    content: 'kjdbvcafkcubafd alkvjbqe aldsjvfbqedv  alsjvna ljasbvclj as alsjvcba  ljbasd akljdc  ljasc ljasbvcljadsv ljasbvjad ljbckakjscv jojbsdv',
    user_id: '3'
  },
];

const seedBlogs = () => Blog.bulkCreate(blogdata);

module.exports = seedBlogs;
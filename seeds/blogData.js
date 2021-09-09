const { Blog } = require('../models');

const blogdata = [
  {
    title: 'Passing arguments as objects - JS',
    content: `This way of passing arguments has lots of benefits:
    -The order of the parameters does not matter anymore, allowing you to concentrate on delivering high-quality code instead of repeatedly checking the function definition.
    -Auto-completion becomes easier as the IDE will focus on the specific argument that you are providing.
    -This method communicates intent in a clear way as function calls specify the value of each property.
    -Large codebases will benefit tremendously from the additional verbosity.`,
    user_id: '1'
  },
  {
    title: 'Naming Variables',
    content: `-The variable name must describe the information represented by the variable. A variable name should tell you specifically in words what the variable stands for.
    -Your code will be read more times than it is written. Prioritize how easy your code is to understand rather than how quickly it is written.
    -Adopt standard conventions for naming so you can make one global decision instead of multiple local decisions.`,
    user_id: '2'
  },
  {
    title: 'Found a nice article on HTML tips',
    content: 'Check it out! https://dev.to/razgandeanu/9-extremely-useful-html-tricks-463a',
    user_id: '3'
  },
];

const seedBlogs = () => Blog.bulkCreate(blogdata);

module.exports = seedBlogs;
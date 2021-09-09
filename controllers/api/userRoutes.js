const router = require('express').Router();
const { User, Blog, Comment } = require('../../models');

// CREATE new user
router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.logged_in = true;

      res.status(200).json(dbUserData);
    });

    console.log(req.session)

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Create new Blog
router.post('/blog', async (req, res) => {
  try {
    const dbBlogData = await Blog.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id
    });

    res.status(200).json(dbBlogData)
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
})

//Update Blog
router.put('/blog', async (req, res) => {
  try {
    const dbBlogData = await Blog.update(
      {
      title: req.body.title,
      content: req.body.content,
      },
      {
        where: {
          id: req.body.id
        }
      }
    );

    res.status(200).json(dbBlogData)
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
})

//Delete Blog
router.delete('/blog', async (req, res) => {
  try {
    const dbPostData = await Blog.destroy({
      where: {
        id: req.body.id
      }
    })

    res.status(200).json('Post Deleted')
  } catch(err) {
    console.error(err);
    res.status(500).json(err);
  }
})

//Create new comment
router.post('/comment', async (req, res) => {
  try {
    const dbCommentData = await Comment.create({
      content: req.body.content,
      user_id: req.session.user_id,
      blog_id: req.body.blog_id
    });

    res.status(200).json(dbCommentData)
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
})

//Update comment
router.put('/comment', async (req, res) => {
  try {
    const dbCommentData = await Comment.update(
      {
        content: req.body.content,
      },
      {
        where: {
          id: req.body.id
        }
      }
    );

    res.status(200).json(dbCommentData)
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
})

//Delete Comment
router.delete('/comment', async (req, res) => {
  try {
    const dbCommentData = await Comment.destroy({
      where: {
        id: req.body.id
      }
    })

    res.status(200).json('Comment Deleted')
  } catch(err) {
    console.error(err);
    res.status(500).json(err);
  }
})


//Login
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.username;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });


  } catch (err) {
    res.status(400).json(err);
  }
});

//Logout
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;

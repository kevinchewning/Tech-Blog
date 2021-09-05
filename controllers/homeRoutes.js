const router = require('express').Router();
const { User, Blog, Comment } = require('../models');
const withAuth = require('../utils/auth');

//Homepage
router.get('/', async (req, res) => {
  try {
    const dbPostData = await Blog.findAll({
      attributes: ['id', 'title', 'content','user_id', 'created_at'],
      include: [
      {
        model: User,
        attributes: ['username']
      }
      ],
    })
    .catch((err) => {console.log(err)})

    posts = dbPostData.map((post) => post.get({plain: true}))
    posts.map((x) => x.currentUserID = req.session.user_id)

    //res.json(posts)

    res.render('homepage', {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Render Create New Post Page
router.get('/newpost', async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/login');
    return;
  }

  res.render('newpost', {
    header: 'New Post',
    logged_in: req.session.logged_in
  })
})

//Render select post by id
router.get('/viewpost/:id', /* withAuth, */ async (req, res) => {
  try {
    //Retrieve Post data
    const dbPostData = await Blog.findByPk(req.params.id, {
      attributes: ['id', 'title', 'content', 'created_at'],
        include: [
          {
            model: User,
            attributes: ['username']
          }
        ],
    })
  
    posts = dbPostData.get({plain: true})

    //Retrieve Comment data
    const dbCommentData = await Comment.findAll({
      where: {
        blog_id: req.params.id
      },
      attributes: ['id', 'content', 'created_at', 'user_id'],
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    })

    comments = dbCommentData.map((x) => x.get({ plain: true }))
    comments.map((x) => x.currentUserID = req.session.user_id)
  
    res.render('viewpost', {
      posts,
      comments,
      header: 'Post #' + req.params.id,
      user_id: req.session.user_id,
      logged_in: req.session.logged_in
    })
  } catch (err) {
    console.error(err)
  }
})

//Render User Dashboard
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const dbPostData = await Blog.findAll(
      {
        where: {
          user_id: req.session.user_id
        },
        attributes: ['id', 'title', 'content', 'created_at'],
      include: [
      {
        model: User,
        attributes: ['username']
      }
      ],
      },
    )
    .catch((err) => {console.log(err)})

    posts = dbPostData.map((post) => post.get({plain: true}))

    res.render('dashboard', {
      posts,
      header: `${req.session.username}'s Dashboard`,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Render Update Post Screen
router.get('/updatepost/:id', withAuth, async (req, res) => {
  try {
    const dbPostData = await Blog.findByPk(req.params.id, {
      attributes: ['id', 'title', 'content', 'created_at'],
        include: [
          {
            model: User,
            attributes: ['username']
          }
        ],
    })
  
    post = dbPostData.get({plain: true})

    res.render('updatepost', {
      post,
      header: 'Update Post',
      logged_in: req.session.logged_in
    })
  } catch (err) {
    console.error(err)
  }
})

//Render Update Comment Screen
router.get('/updatecomment/:id', withAuth, async (req, res) => {
  try {
    const dbCommentData = await Comment.findByPk(req.params.id, {
      attributes: ['id', 'content', 'blog_id', 'created_at'],
        include: [
          {
            model: User,
            attributes: ['username']
          }
        ],
    })
  
    comment = dbCommentData.get({plain: true})

    res.render('updatecomment', {
      comment,
      header: 'Update Comment',
      logged_in: req.session.logged_in
    })
  } catch (err) {
    console.error(err)
  }
})

//Render Login Screen
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login', {
    header: 'Login'
  });
});

//Render New User Screen
router.get('/newuser', (req, res) => {
  res.render('newuser', {
    header: 'Create User'
  })
})

//Redirect invalid routes to homepage
router.get('*', (req, res) => {
  res.redirect('/');
});

module.exports = router;

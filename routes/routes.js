const express = require('express');
const router = express.Router();
const passport = require('passport');

// Middleware
const auth = require('../middleware/auth')

// Route imports
const users = require('../routes/users');
const comments = require('../routes/comments');

// Routes
router.use('/users', users);
router.use('/comments', comments);

router.get('/logout', function(req, res){
  req.logout();
  res.json({success: true, msg: "Successfully logged out!"});
});

router.get('/user', auth.isLogged, function(req, res) {
    res.json({success: true, user: req.user});
});

router.get("/auth/twitch", passport.authenticate("twitch"));

router.get("/auth/twitch/callback", passport.authenticate("twitch", { failureRedirect: "http://www.twitchclips.io/" }), function(req, res) {
    // Successful authentication, redirect home.
    res.redirect("http://www.twitchclips.io/");
});

module.exports = router;

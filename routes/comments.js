const express = require('express');
const router = express.Router();
const passport = require('passport');
const validator = require('validator');
const async = require('async');

// Models
const Comment = require("../models/comment");
const User = require("../models/user");

// Middleware
const auth = require('../middleware/auth')

// POST Adds a comment to the DB
router.post('/', auth.isLogged, function(req, res) {
  let comment = new Comment;
  comment.user = req.user.id;
  comment.clipSlug = req.body.comment.clipSlug;
  comment.message = validator.escape(req.body.comment.message); // converts html tags into html entities
  comment.when = req.body.comment.when;
  Comment.create(comment, function(err, result) {
    if (err) res.json({
      success: false,
      err: err
    });
    res.json({
      success: true,
      comment: result
    });
  })
});

// GET Returns all comments from specific clip slug
router.get('/:slug', function(req, res) {
  Comment.getBySlug(req.params.slug, function(err, comments) {
    if (err) res.json({
      success: false,
      err: err
    });
    if (comments.length != 0)
      res.json({
        success: true,
        comments: comments
      });
    else res.json({
      success: false,
      msg: "No results have been found"
    });
  });
});

// POST removes specific comment by its id
// Not using delete method because Angular http module doesnt allow to pass body elements
// and we need them in order to pass not only comment id but user's twitchId too, so we dont have to
// additionally search for user twitchId in this method.
router.post('/remove', auth.isLogged, auth.canModify, function(req, res) {
  Comment.remove(req.body.comment._id, function(err, comment) {
    res.json({
      success: true,
      id: comment.id
    });
  });
});

router.put('/', auth.isLogged, auth.canModify, function(req, res) {
  Comment.update(req.body.comment, function(err, comment) {
    res.json({
      success: true,
      comment: req.body.comment
    });
  });
});

//POST Voting sumission
router.post('/vote/:action', auth.isLogged, function(req, res) {
  let value;
  if (req.params.action == '1') value = 1;
  if (req.params.action == '-1') value = -1;
  Comment.hasVoted(req.body.comment, req.user.id, function(err, comment) { //Checks if user already voted
    if (!comment) { // If not, here where the vote gets added
      Comment.submitVote(req.body.comment, req.user.id, value, function(err, result) {;
        res.json({ success: true, comment: result });
      });
    } else if (comment && comment.votes[0].value == -value) { // If user voted on opposite side, then vote gets deleted and new one is submitted
      Comment.removeVote(comment, req.user.id, function(err, result) {
        Comment.submitVote(req.body.comment, req.user.id, value, function(err, result) {
          res.json({ success: true, comment: result });
        });
      });
    } else if (comment && comment.votes[0].value == value) { // If user presses on the same vote, then vote gets deleted
      Comment.removeVote(comment, req.user.id, function(err, result) {
        res.json({ success: true, comment: result });
      });
    } else { // If it shits the bed this result gets returned instead
      res.json({ success: false });
    }
  });
});

module.exports = router;

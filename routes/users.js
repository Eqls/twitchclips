const express = require('express');
const router = express.Router();
const passport = require('passport');

// Models
const User = require("../models/user");

// Middleware
const auth = require('../middleware/auth')

// // GET Returns all comments from specific clip slug
// router.get('/getname/:id', function(req, res) {
//     User.getById(req.params.id, function(err, user) {
//       if(err) res.json({success: false, err: err});
//       if(user) res.json({success: true, username: user.username});
//       else res.json({success: false, msg: "No results have been found"});
//     });
// });

module.exports = router;

const auth = module.exports;

// Checks if user is logged in
module.exports.isLogged = function (req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.json({success: false, msg: "User is not logged"});
};

// Checks if user is an admin
module.exports.isAdmin = function (req, res, next) {
  if(req.isAuthenticated() && req.user.role == "admin") { return next(); }
  res.json({success: false, msg: "Permission denied!"});
}

// Checks if user is an admin
module.exports.canModify = function (req, res, next) {
  if(req.body.comment.twitchId == req.user.twitchId || auth.isAdmin) { return next(); }
  res.json({success: false, msg: "Permission denied!"});
}

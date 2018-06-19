const twitchStrategy = require("passport-twitch").Strategy;
const User = require("../models/user");
const passport = require("passport");

module.exports = function(passport) {

  passport.use(new twitchStrategy({
      //clientID: "u9hr04f105qdfs6rktl4i5qaggc8jc", //localhost
      //clientSecret: "vvwsmdfroj3p5zv8ggzuor56zpkpmd", //localhost/
      clientID: "f3wkzgrvb7qhl54sa3n54io035lnwj",
      clientSecret: "pwrymezeo847j1mj9ba7ai5iv3etct",
      callbackURL: "http://www.twitchclips.io/api/auth/twitch/callback",
      scope: "user_read"
    },
    function(accessToken, refreshToken, profile, done) {
      User.getById(profile.id, function(err, user) { //Checks if user exists in database
        if (err)
          return done(err)

        if (user) return done(null, user) // if user already in the DB it return the user;
        else { // else new user is created
          let newUser = new User()
          newUser.twitchId = profile.id;
          newUser.username = profile.username;
          newUser.email = profile.email;
          newUser.role = "user";

          // creates user and adds it to db
          User.create(newUser, function(err) {
            // if success, return the new user
            return done(null, newUser)
          });
        }
      })
    }
  ));

  passport.serializeUser(function(user, done) {
    done(null, user.twitchId);
  });

  passport.deserializeUser(function(twitchId, done) {
    User.getById(twitchId, function(err, user) {
      done(err, user);
    });
  });
}

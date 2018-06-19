const mongoose = require('mongoose');
const config = require('../config/database');

const UserSchema = mongoose.Schema({
    twitchId: { type: String },
    username: { type: String },
    email: { type: String },
    role: { type: String }
})

const User = module.exports = mongoose.model('User', UserSchema)

module.exports.getById= function(twitchId, callback) {
    let query = {'twitchId' : twitchId}
    User.findOne(query, callback);
}

module.exports.getAll = function(callback) {
    User.find(callback);
}

module.exports.create = function(newUser, callback) {
    newUser.save(callback);
}

module.exports.update = function(user, callback) {
    user.save(callback);
}

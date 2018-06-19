const mongoose = require('mongoose');
const config = require('../config/database');

//Models
//const User = require("./user");

const CommentSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  clipSlug: { type: String },
  message: { type: String },
  when: { type: Date },
  votes: [{
    uid: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    value: { type: String }
  }]
})

const Comment = module.exports = mongoose.model('Comment', CommentSchema)

module.exports.getBySlug = function(clipSlug, callback) {
  let query = { 'clipSlug': clipSlug }
  Comment.find(query, callback).populate('user').exec();
}

module.exports.hasVoted = function(comment, uid, callback) {
  Comment.findOne({ '_id': comment._id, 'votes.uid': uid},  { 'votes.$': 1}, callback);
}

module.exports.removeVote = function(comment, uid, callback) {
  Comment.findOneAndUpdate({ '_id': comment._id },{ $pull : { 'votes' : { 'uid': uid} } }, {new: true }, callback);
}

module.exports.submitVote = function(comment, userId, vote, callback) {
  Comment.findOneAndUpdate({'_id': comment._id}, {$push: {"votes" :
  {"uid" : userId , "value": vote } } },
  {new:true}, callback);
}

module.exports.getById = function(id, callback) {
  Comment.findById(id, callback).populate('user').exec();
}

module.exports.getAll = function(callback) {
  Comment.find(callback).populate('user').exec();
}

module.exports.create = function(comment, callback) {
  comment.save(callback);
}

module.exports.update = function(comment, callback) {
  let query = { '_id': comment._id }
  var options = { new: true };
  Comment.findOneAndUpdate(query, comment, options, callback);
}

module.exports.remove = function(id, callback) {
  Comment.findByIdAndRemove(id, callback);
}

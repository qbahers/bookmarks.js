var mongoose = require('mongoose');

module.exports = mongoose.model('Bookmark', {
  name: String,
  url:  String,
  date: { type: Date, default: Date.now }
});

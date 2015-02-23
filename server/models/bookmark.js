var mongoose = require('mongoose');

module.exports = mongoose.model('Bookmark', {
  name: String,
  url:  String
});

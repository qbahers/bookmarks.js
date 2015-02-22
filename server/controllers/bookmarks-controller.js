var Bookmark = require('../models/bookmark');

module.exports.create = function (req, res) {
  var bookmark = new Bookmark(req.body);
  bookmark.save(function (err, result) {
    res.json(result);
  });
}

module.exports.list = function (req, res) {
  Bookmark.find({}, function(err, results) {
    res.json(results);
  });
}
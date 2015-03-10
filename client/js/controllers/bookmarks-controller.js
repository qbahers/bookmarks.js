'use strict';

app.factory('Bookmark', function ($resource) {
  return $resource('/api/bookmarks/:id');
});

app.controller('bookmarksController', ['$scope', 'Bookmark', function ($scope, Bookmark) {
  $scope.bookmarks = [];

  Bookmark.query(function (result) {
    $scope.bookmarks = result;
  });

  $scope.createBookmark = function (bookmark) {
    var bk = new Bookmark();

    bk.name  = bookmark.name;
    bk.url   = bookmark.url;
    bk.tags  = (bookmark.tags === undefined || bookmark.tags === "") ? [] : bookmark.tags.split(",");

    bk.$save(function (result) {
      $scope.bookmarks.push(result);
      bookmark.name  = '';
      bookmark.url   = '';
      bookmark.tags  = '';
    });
  };

  $scope.removeBookmark = function (bookmark) {
    Bookmark.remove({ id: bookmark._id }, function() {
      $scope.bookmarks.forEach(function (bk, index) {
	      if (bk._id == bookmark._id) $scope.bookmarks.splice(index, 1);
      });
    });
  };

  $scope.getHostname = function (url) {
    var parser = document.createElement('a');
    parser.href = url;
    return parser.hostname;
  };

  $scope.bookmarkDate = function (bookmark) {
    return new Date(bookmark.date).getTime();
  };
}]);

(function() {
  'use strict';

  angular
    .module('bookmarking-app')
    .controller('BookmarksController', BookmarksController);

  BookmarksController.$inject = ['$scope', 'Bookmark'];

  function BookmarksController ($scope, Bookmark) {
    $scope.bookmarks = [];

    Bookmark.query(function (result) {
      $scope.bookmarks = result;
    });

    $scope.createBookmark = function (bookmark) {
      var bk = new Bookmark(bookmark);
      
      bk.tags = (bookmark.tags === undefined || bookmark.tags === '') ? [] : bookmark.tags.split(',');

      bk.$save(function (result) {
        $scope.bookmarks.push(result);
        bookmark.name  = '';
        bookmark.url   = '';
        bookmark.tags  = '';
      });
    };

    $scope.removeBookmark = function (bookmark) {
      Bookmark.remove({ id: bookmark._id }, function() {
        var index = $scope.bookmarks.indexOf(bookmark);
        $scope.bookmarks.splice(index, 1);
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
  }
})();
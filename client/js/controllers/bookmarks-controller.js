app.controller('bookmarksController', ['$scope', '$resource', function($scope, $resource) {
  var Bookmark = $resource('/api/bookmarks');

  Bookmark.query(function (result) {
    $scope.bookmarks = result;
  })
  
  $scope.bookmarks = [];

  $scope.createBookmark = function() {
    var bookmark = new Bookmark();
    bookmark.name = $scope.bookmarkName;
    bookmark.$save(function (result) {
      $scope.bookmarks.push(result);
      $scope.bookmarkName = '';
    });
  }
}]);
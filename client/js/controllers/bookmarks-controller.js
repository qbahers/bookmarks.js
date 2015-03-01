app.factory('Bookmark', function($resource) {
  return $resource('/api/bookmarks/:id');
});

app.controller('bookmarksController', ['$scope', 'Bookmark', function($scope, Bookmark) {
  Bookmark.query(function (result) {
    $scope.bookmarks = result;
  });
  
  $scope.bookmarks = [];

  $scope.createBookmark = function () {
    var bookmark = new Bookmark();
    bookmark.name  = $scope.bookmarkName;
    bookmark.url   = $scope.bookmarkUrl;
    if ($scope.bookmarkTags === undefined || $scope.bookmarkTags === "") { 
      bookmark.tags = [];
    }
    else {
      bookmark.tags = $scope.bookmarkTags.split(",");
    }
    bookmark.$save(function (result) {
      $scope.bookmarks.push(result);
      $scope.bookmarkName  = '';
      $scope.bookmarkUrl   = '';
      $scope.bookmarkTags  = '';
    });
    $('#myModal').modal('hide');
  };

  $scope.removeBookmark = function (bookmark) {
    Bookmark.remove({ id: bookmark._id }, function() {
      $scope.bookmarks.forEach(function (b, index) {
	if (b._id == bookmark._id) $scope.bookmarks.splice(index, 1);
      });
    });
  };

  $scope.getHostname = function (url) {
    var parser = document.createElement('a');
    parser.href = url;
    return parser.hostname;
  };

  $scope.bookmarkDate = function (bookmark) {
    var date = new Date(bookmark.date).getTime();
    return date;
  };
}]);

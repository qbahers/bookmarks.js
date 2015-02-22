app.controller('bookmarksController', ['$scope', '$resource', function($scope, $resource) {
  $scope.bookmarks = [
    { name: "AAA" },
    { name: "BBB" }
  ];

  $scope.createBookmark = function() {
    $scope.bookmarks.push({ name: $scope.bookmarkName });
    $scope.bookmarkName = '';
  }
}]);
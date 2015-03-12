'use strict';

app.factory('Bookmark', ['$resource', function ($resource) {
  return $resource('/api/bookmarks/:id');
}]);
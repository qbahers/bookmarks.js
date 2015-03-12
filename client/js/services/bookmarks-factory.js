'use strict';

angular
  .module('bookmarkApp')
  .factory('Bookmark', ['$resource', function ($resource) {
    return $resource('/api/bookmarks/:id');
  }]);
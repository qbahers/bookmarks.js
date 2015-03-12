'use strict';

angular
  .module('bookmarkApp')
  .factory('Bookmark', Bookmark);

Bookmark.$inject = ['$resource'];

function Bookmark ($resource) {
  return $resource('/api/bookmarks/:id');
}
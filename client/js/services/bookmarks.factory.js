(function() {
  'use strict';

  angular
    .module('bookmarking-app')
    .factory('Bookmark', Bookmark);

  Bookmark.$inject = ['$resource'];

  function Bookmark ($resource) {
    return $resource('/api/bookmarks/:id');
  }
})();
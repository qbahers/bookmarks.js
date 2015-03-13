(function() {
  'use strict';

  angular
    .module('bookmarking-app')
    .constant('angularMomentConfig', {
      preprocess: 'utc',
      timezone: 'Europe/London'
    });
})();
'use strict';

angular
  .module('bookmarkApp', [
    'ngResource', 
    'ngSanitize', 
    'angularMoment', 
    'mgcrea.ngStrap'
  ])
  .constant('angularMomentConfig', {
    preprocess: 'utc',
    timezone: 'Europe/London'
  });
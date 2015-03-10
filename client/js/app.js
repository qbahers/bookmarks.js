'use strict';

var app = angular.module('bookmarkApp', ['ngResource', 'ngSanitize', 'angularMoment', 'mgcrea.ngStrap']);

app.constant('angularMomentConfig', {
    preprocess: 'utc',
    timezone: 'Europe/London'
});

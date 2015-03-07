var app = angular.module('bookmarkApp', ['ngResource', 'angularMoment', 'mgcrea.ngStrap']);

app.constant('angularMomentConfig', {
    preprocess: 'utc',
    timezone: 'Europe/London'
});

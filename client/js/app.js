var app = angular.module('bookmarkApp', ['ngResource', 'angularMoment']);

app.constant('angularMomentConfig', {
    preprocess: 'utc',
    timezone: 'Europe/London'
});

'use strict';

angular.module('breakfastApp', ['ngRoute'])
.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'app/views/login.html',
        controller: 'MainCtrl'
    })
    .when('/test', {
        templateUrl: 'app/views/login.html',
        controller: 'MainCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
});
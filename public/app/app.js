'use strict';

angular.module('breakfastApp', ['ngRoute'])
.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'app/views/login.html',
        controller: 'MainCtrl'
    })
    .when('/planning', {
        templateUrl: 'app/views/planning.html',
        controller: 'PlanningCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
});
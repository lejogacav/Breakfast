'use strict';

var app = angular.module('breakfastApp', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/views/main.html'
        })
        .when('/planif', {
            templateUrl: 'app/views/partials/_plannification.html',
            controller: 'PlannificationCtrl'
        })
        .when('/events', {
            templateUrl: 'app/views/partials/_events.html',
            controller: 'EventCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});
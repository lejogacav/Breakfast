'use strict';

var app = angular.module('breakfastApp');
app.controller('MainCtrl', function ($scope) {

	// On vérifie si le formulaire est valide
   $scope.submitLogin = function () {
		dpd.users.login({username: $scope.username, password: $scope.password}, function(user, err) {
			if(err) {
                loggedInStatus.setStatus("false");
				alert(err.message);
			} else{ 	
                loggedInStatus.setStatus("true");
				location.href="/#/planning"
			}
		});
   }; 
});



/*app.service('loggedInStatus', function () {  
    var loggedIn = "";
    var currentUser = {};
    return {
        getStatus: function () {
            return loggedIn;
        },
        setStatus: function (value) {
            loggedIn = value;
        },
        getCurrentUser: function () {
            return dpd.users.me(function(me) {
                    if(me){
                        currentUser = me;
                    }
                });
        }
    };
});*/

/*
// Exemple de factory
app.factory('isAuthenticatedFactory', function ($q, $timeout, $http, $location, $rootScope) {
    // Initialize a new promise
    var deferred = $q.defer();
    var stateReturn = false;

    // Make a call to check if the user is logged in
    dpd.users.me(function(me) {
        // Authenticated
        if(me){     
            $timeout(deferred.resolve, 0);
            stateReturn = true;
        } else {
            $rootScope.message = 'You need to log in.';
            $timeout(function(){deferred.reject();}, 0);
            $location.url('/');
        }
    });
 return stateReturn;
});*/
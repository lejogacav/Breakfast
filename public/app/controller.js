'use strict';

var app = angular.module('breakfastApp');

// Controller Plannification
app.controller('PlannificationCtrl', function ($scope) {
    // On raffraîchi la liste des évènements
    dpd.events.get(function (result, err) {
        if(err) return console.log(err);
        $scope.events = result;
        $scope.$apply();
    });

	// On vérifie si le formulaire est valide
   $scope.addEvent = function ($valid) {
        if($valid){
            //On met le nom et le prénom en capitales
            var name = $scope.eventForm.name.toUpperCase();
            var firstname = $scope.eventForm.firstname.charAt(0).toUpperCase() + $scope.eventForm.firstname.substring(1);
            // On envoi les information du form en base
    		dpd.events.post({"name": name,"firstname": firstname,"entitled": $scope.eventForm.entitled,"date": $scope.eventForm.date}, function(result, err) {
                  if(err) return console.log(err);
                  else {
                    // Reset formulaire
                    /*$scope.eventForm.name = "";
                    $scope.eventForm.firstname = "";
                    $scope.eventForm.entitled = "";
                    $scope.eventForm.date = "";
                    $scope.$apply();*/
                    location.href = "#/events";
                  }
            });
        }
        else{
            alert($valid);
        }
   };
});


// Controller Evènements
app.controller('EventCtrl', function ($scope) {
    // On raffraîchi la liste des évènements
    dpd.events.get(function (result, err) {
        if(err) return console.log(err);
        $scope.events = result;
        $scope.$apply();
    });

    $scope.ctrlFn = function(test) {
        alerte.log(test);
    }

});


app.directive('ngEvent', function (){
    return {
        scope : {
            event :'=',
            deleteEventFn : '&deleteFn'
        },
        restrict : 'E',
        templateUrl: '/app/views/partials/_event.html'
    }
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
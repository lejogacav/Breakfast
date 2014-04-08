'use strict';

angular.module('breakfastApp')
.controller('MainCtrl', function ($scope) {

	// On vérifie si le formulaire est valide
   $scope.submitLogin = function (isValid) {
   		if(isValid)
   		{
   			dpd.users.login({username: $scope.username, password: $scope.password}, function(user, err) {
				if(err) {
					alert(err.message);
				} else{ 
					alert(user);
				}
			});
   		}
   }; 
});
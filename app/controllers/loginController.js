'use strict';

angular.module('ProUrban')
.controller('loginController', ['$scope', '$rootScope', '$location', 'localStorageService', 'AuthenticationService',
	function($scope, $rootScope, $location, localStorageService, AuthenticationService) {
		$scope.init = init;
		$scope.login = login;

		function init() {
			if (AuthenticationService.isLoggedIn()) {
		    	$location.path('/');
		    }
		}

		function login() {
			AuthenticationService.login($scope.usuario, $scope.clave)
			.then(function(response) {
				// MANEJO DE RESPUESTA
				var data = JSON.parse(response.respuesta)[0];
				
				AuthenticationService.setCredentials(data);
				$location.path('/');
			}, function(err){
				// MANEJO DE ERRORES
			});
		}

	    $scope.init();
	}
]);
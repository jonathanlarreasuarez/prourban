'use strict';

angular.module('ProUrban')
.controller('appController', ['$scope', '$location', 'AuthenticationService', 'localStorageService',
	function($scope, $location, AuthenticationService, localStorageService) {
		$scope.init = init;
		$scope.logout = logout;

		function init() {
			if (!AuthenticationService.isLoggedIn()) {
		    	$location.path('/login');
		    } else {
		    	var data = AuthenticationService.getCredentials();
		    	AuthenticationService.setCredentials(data);
		    }
		}

		function logout() {
			localStorageService.clearAll();
			if (!AuthenticationService.isLoggedIn()) {
				$location.path('/login');
			} else {
				console.log('SI');
		    	$location.path('/');
		    }
		}

		$scope.init();
	}
]);
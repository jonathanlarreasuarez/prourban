'use strict';

angular.module('ProUrban')
.config(['$routeProvider',
	function($routeProvider) {
		
		$routeProvider
		.when('/', {
			templateUrl: 'app/views/pages/administrador/index.html',
			controller: 'appController'
		})
		.when('/login', {
			templateUrl: 'app/views/pages/login.html',
			controller: 'loginController'
		})
		.when('/proveedores', {
			templateUrl: 'app/views/pages/administrador/proveedores.html'/*,
			controller: 'loginController'*/
		})
		.otherwise({ redirectTo: '/login' });
	}
]);
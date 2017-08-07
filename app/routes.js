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
		.when('/gastos', {
			templateUrl: 'app/views/pages/administrador/gastos.html',
			controller: 'cuentaxpagarController'
		})
		.when('/proveedores', {
			templateUrl: 'app/views/pages/administrador/proveedores.html',
			controller: 'proveedorController'
		})
		.when('/404', {
			templateUrl: 'app/views/pages/page_404.html'			
		})
		.otherwise({ redirectTo: '/404' });
	}
]);
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
			templateUrl: 'app/views/pages/administrador/gastos/gastos.html',
			controller: 'cuentaxpagarController'
		})
		.when('/form_gastos', {
			templateUrl: 'app/views/pages/administrador/gastos/form_gastos.html',
			controller: 'cuentaxpagarController'
		})
		.when('/proveedores', {
			templateUrl: 'app/views/pages/administrador/proveedores.html',
			controller: 'proveedorController'
		})
		.when('/deudas', {
			templateUrl: 'app/views/pages/administrador/deudas/deudas.html',
			controller: 'cuentaxcobrarController'
		})
		.when('/factura', {
			templateUrl: 'app/views/pages/administrador/factura.html',
			controller: 'facturaController'
		})
		.when('/reservas', {
			templateUrl: 'app/views/pages/administrador/reservas.html',
			controller: 'reservaController'
		})
		.when('/cuentas', {
			templateUrl: 'app/views/pages/administrador/cuentas.html',
			controller: 'cuentasController'
		})
		.when('/asientoContable', {
			templateUrl: 'app/views/pages/administrador/asientoContable.html'
		})//seguridad
		.when('/rol', {
			templateUrl: 'app/views/pages/administrador/rol.html',
			controller: 'rolController'
		})
		.when('/crearRol', {
			templateUrl: 'app/views/pages/administrador/crearRol.html',
			controller: 'rolController'
		})
		.when('/usuarios', {
			templateUrl: 'app/views/pages/administrador/usuarios.html',
			controller: 'usuarioController'
		})
		.when('/crearUsuario', {
			templateUrl: 'app/views/pages/administrador/crearUsuario.html',
			controller: 'usuarioController'
		})
		.when('/opcionrol', {
			templateUrl: 'app/views/pages/administrador/opcionrol.html',
			controller: 'opcionrolController'
		})//seguridad
		.when('/404', {
			templateUrl: 'app/views/pages/page_404.html'
		})
		.otherwise({ redirectTo: '/404' });
	}
]);

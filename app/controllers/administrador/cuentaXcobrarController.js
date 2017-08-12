'use strict';

angular.module('ProUrban')
.controller('cuentaXcobrarController', ['$scope', '$rootScope', '$location', 'localStorageService', 'cuentaXcobrarService',
	function($scope, $rootScope, $location, localStorageService, cuentaXcobrarService) {

		$scope.proceso = 1;	// 1: insertar

		$scope.getCuentaXcobrar = getCuentaXcobrar;


		function getCuentaXcobrar() {
			if ($scope.proceso === 1 ) {
				console.log('entro al inicio');
				cuentaXcobrarService.getCuentaXcobrar("nulo")
				.then(function(response) {
					response = JSON.parse(response.respuesta);

					if (response.codigo === 1) {
						$scope.data = response.datos;
					} else {
						alert(response.mensaje);
					}
				}, function(err) {
					// MANEJO DE ERRORES
				});
				$scope.proceso = 2;
			}else {
				console.log($scope.nombrexBuscar);
				cuentaXcobrarService.getCuentaXcobrar($scope.nombrexBuscar)
				.then(function(response) {
					response = JSON.parse(response.respuesta);

					if (response.codigo === 1) {
						$scope.data = response.datos;
					} else {
						alert(response.mensaje);
					}
				}, function(err) {
					// MANEJO DE ERRORES
				});
			}

		}
		$scope.getCuentaXcobrar("nulo");

	}
]);

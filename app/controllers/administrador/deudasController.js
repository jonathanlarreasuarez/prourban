'use strict';

angular.module('ProUrban')
.controller('deudasController', ['$scope', '$rootScope', '$location', 'localStorageService', 'DeudasService',
	function($scope, $rootScope, $location, localStorageService, DeudasService) {

		$scope.proceso = 1;	// 1: insertar

		$scope.getDeudas = getDeudas;


		function getDeudas() {
			if ($scope.proceso === 1 ) {
				console.log('entro al inicio');
				DeudasService.getDeudas("nulo")
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
				DeudasService.getDeudas($scope.nombrexBuscar)
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
		$scope.getDeudas("nulo");

	}
]);

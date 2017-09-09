'use strict';

angular.module('ProUrban')
.controller('asientoController', ['$scope', '$rootScope', '$location', 'localStorageService', 'AsientoService',
	function($scope, $rootScope, $location, localStorageService, AsientoService) {

		$scope.getCuentas = getCuentas;

		function getCuentas() {
			AsientoService.getCuentas()
			.then(function(response) {
				// MANEJO DE RESPUESTA

				response = JSON.parse(response.respuesta);

				if (response.codigo === 1) {
					$scope.data = response.datos;
          console.log('asientos:::', response.datos);
				} else {
					alert(response.mensaje);
				}
			}, function(err) {
				// MANEJO DE ERRORES
			});
		}


		$scope.getCuentas();

	}
]);

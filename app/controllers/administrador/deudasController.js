'use strict';

angular.module('ProUrban')
.controller('deudasController', ['$scope', '$rootScope', '$location', 'localStorageService', 'DeudasService',
	function($scope, $rootScope, $location, localStorageService, DeudasService) {

		$scope.proceso = 1;	// 1: insertar

		$scope.getDeudas = getDeudas;
		

		function getDeudas() {
			DeudasService.getDeudas()
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
		$scope.getDeudas();

	}
]);

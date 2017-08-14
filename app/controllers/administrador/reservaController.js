'use strict';

angular.module('ProUrban')
.controller('reservaController', ['$scope', '$rootScope', '$location', 'localStorageService', 'ReservaService',
	function($scope, $rootScope, $location, localStorageService, ReservaService) {

		$scope.proceso = 1;	// 1: insertar

		$scope.getReservas = getReservas;


		function getReservas() {
			ReservaService.getReservas()
			.then(function(response) {
				// MANEJO DE RESPUESTA

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

		$scope.getReservas();

	}
]);

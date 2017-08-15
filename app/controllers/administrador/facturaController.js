'use strict';

angular.module('ProUrban')
.controller('facturaController', ['$scope', '$rootScope', '$location', 'localStorageService', 'FacturaService',
	function($scope, $rootScope, $location, localStorageService, FacturaService) {

		$scope.proceso = 1;	// 1: insertar

		$scope.buscarCabeceraFactura = buscarCabeceraFactura;


		function buscarCabeceraFactura() {
			var id = localStorageService.get('idCabeceraFactura');

			FacturaService.buscarCabeceraFactura(id)
			.then(function(response) {
				response = JSON.parse(response.respuesta);

				if (response.codigo === 1) {
					var data = response.datos[0];
					$scope.id = data.id;
					$scope.nombre = data.nombre;
					$scope.cedula = data.cedula;
					$scope.direccion = data.direccion;
					
				} else {
					alert(response.mensaje);
				}
			}, function(err) {
				// MANEJO DE ERRORES
			});
		}

		$scope.buscarCabeceraFactura();

	}
]);
'use strict';

angular.module('ProUrban')
.controller('facturaController', ['$scope', '$rootScope', '$location', 'localStorageService', 'FacturaService',
	function($scope, $rootScope, $location, localStorageService, FacturaService) {

		$scope.proceso = 1;	// 1: insertar

		$scope.getCabeceraFactura = getCabeceraFactura;
		$scope.buscarCabeceraFactura = buscarCabeceraFactura;

		function getCabeceraFactura() {
			FacturaService.getCabeceraFactura()
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


		function buscarCabeceraFactura(id) {
			console.log(id);
			FacturaService.buscarCabeceraFactura(id)
			.then(function(response) {
				response = JSON.parse(response.respuesta);

				if (response.codigo === 1) {
					var data = response.datos[0];
					$scope.id = data.id;
					$scope.primer_nombre = data.primer_nombre;
					$scope.primer_apellido = data.primer_apellido;
					$scope.cedula = data.cedula;
					$scope.numero_villa = data.numero_villa;
					
				} else {
					alert(response.mensaje);
				}
			}, function(err) {
				// MANEJO DE ERRORES
			});
		}

		$scope.getCabeceraFactura();

	}
]);
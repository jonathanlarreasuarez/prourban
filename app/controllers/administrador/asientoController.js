'use strict';

angular.module('ProUrban')
.controller('asientoController', ['$scope', '$rootScope', '$location', 'localStorageService', 'AsientoService',
	function($scope, $rootScope, $location, localStorageService, AsientoService) {

		$scope.getAsiento = getAsiento;

		function getAsiento() {
			AsientoService.getAsientoDebito()
			.then(function(response) {
				var arr_asiento = [];
				response = JSON.parse(response.respuesta);
				if (response.codigo === 1) {
					$scope.data = response.datos;
					var t = $scope.data.length;
					for (var i=0; i < t; i++) {
				        AsientoService.getAsientoCredito()
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
				} else {
					alert(response.mensaje);
				}
			}, function(err) {
				// MANEJO DE ERRORES
			});
		}
		$scope.getAsiento();

	}
]);

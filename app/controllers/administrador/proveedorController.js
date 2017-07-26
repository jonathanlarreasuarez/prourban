'use strict';

angular.module('ProUrban')
.controller('proveedorController', ['$scope', '$rootScope', '$location', 'localStorageService', 'ProveedorService',
	function($scope, $rootScope, $location, localStorageService, ProveedorService) {
		$scope.getProveedores = getProveedores;

		function getProveedores() {
			ProveedorService.getProveedores()
			.then(function(response) {
				// MANEJO DE RESPUESTA
				response = JSON.parse(response.respuesta)
				
				if (response.codigo === 1) {
					$scope.data = response.datos;
				} else {
					alert(response.mensaje);
				}
			}, function(err){
				// MANEJO DE ERRORES
			});
		}

		$scope.getProveedores();
	}
]);
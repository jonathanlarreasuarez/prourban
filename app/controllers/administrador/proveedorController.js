'use strict';

angular.module('ProUrban')
.controller('proveedorController', ['$scope', '$rootScope', '$location', 'localStorageService', 'ProveedorService',
	function($scope, $rootScope, $location, localStorageService, ProveedorService) {
		
		$scope.getProveedores = getProveedores;
		$scope.createProveedor = createProveedor;

		function getProveedores() {
			ProveedorService.getProveedores()
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

		function createProveedor() {
			ProveedorService.createProveedor($scope.descripcion, $scope.ruc)
			.then(function(response) {
				// MANEJO DE RESPUESTA
				response = JSON.parse(response.respuesta);

				if (response.codigo === 1) {
					clearForm();
					$scope.getProveedores();
				}

				alert(response.mensaje);
			}, function(err) {
				// MANEJO DE ERRORES
			});
		}

		function editProveedor(id) {
			/*ProveedorService.getProveedor(id)
			.then(function(response) {
				// MANEJO DE RESPUESTA
				response = JSON.parse(response.respuesta);

				if (response.codigo === 1) {
					//$('#descripcion').val(response.);
					//$('#ruc').val();
				}
			}, function(err) {
				// MANEJO DE ERRORES
			});*/
		}

		function clearForm() {
			$('#proveedorForm input').val("");
		}

		$scope.getProveedores();
	}
]);
'use strict';

angular.module('ProUrban')
.controller('cuentaxpagarController', ['$scope', '$rootScope', '$location', 'localStorageService', 'CuentaxpagarService',
	function($scope, $rootScope, $location, localStorageService, CuentaxpagarService) {

		$scope.proceso = 1;	// 1: insertar

		$scope.getCuentasxpagar = getCuentasxpagar;
		$scope.insertarCuentaxpagar = insertarCuentaxpagar;
		$scope.modificarCuentaxpagar = modificarCuentaxpagar;
		$scope.eliminarCuentaxpagar = eliminarCuentaxpagar;
		$scope.buscarCuentaxpagar = buscarCuentaxpagar;

		function getCuentasxpagar() {
			CuentaxpagarService.getCuentasxpagar()
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

		//	Insertar Proveedor
		function insertarCuentaxpagar() {
			if ($scope.proceso === 1) {
				CuentaxpagarService.insertarCuentaxpagar($scope.descripcion, $scope.ruc)
				.then(function(response) {
					// MANEJO DE RESPUESTA
					response = JSON.parse(response.respuesta);

					if (response.codigo === 1) {
						clearForm();
						$scope.getCuentasxpagar();
					}

					alert(response.mensaje);
				}, function(err){
					// MANEJO DE ERRORES
				});
			} else if ($scope.proceso === 2) {
				modificarCuentaxpagar();
			}
		}
		//modificar Proveedor
		function modificarCuentaxpagar() {
			console.log($scope.id);
			CuentaxpagarService.modificarCuentaxpagar($scope.id, $scope.descripcion, $scope.ruc)
			.then(function(response) {
				// MANEJO DE RESPUESTA
				response = JSON.parse(response.respuesta);

				if (response.codigo === 1) {
					clearForm();
					$scope.getCuentasxpagar();
					$scope.proceso = 1;	// 1: insertar
				}

				alert(response.mensaje);
			}, function(err){
				// MANEJO DE ERRORES
			});
		}

		//eliminar Proveedor
		function eliminarCuentaxpagar(id) {
			CuentaxpagarService.eliminarCuentaxpagar(id)
			.then(function(response) {
				// MANEJO DE RESPUESTA
				response = JSON.parse(response.respuesta);

				if (response.codigo === 1) {
					$scope.getCuentasxpagar();
				}

				alert(response.mensaje);
			}, function(err){
				// MANEJO DE ERRORES
			});
		}

		//buscar el Proveedor para luego ser modificado
		function buscarCuentaxpagar(id) {
			CuentaxpagarService.buscarCuentaxpagar(id)
			.then(function(response) {
				// MANEJO DE RESPUESTA
				response = JSON.parse(response.respuesta);

				if (response.codigo === 1) {
					var data = response.datos[0];
					$scope.id = data.id;
					$scope.descripcion = data.descripcion;
					$scope.ruc = data.ruc;
					$scope.proceso = 2;	// 2: editar
				}
			}, function(err) {
				// MANEJO DE ERRORES
			});
		}

		//	Limpia los inputs de tipo text del formulario
		function clearForm() {
			$('#cuentaxpagarForm input[type="text"]').val("");
		}

		$scope.getCuentasxpagar();

	}
]);

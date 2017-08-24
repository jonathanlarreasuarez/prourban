'use strict';

angular.module('ProUrban')
.controller('cuentaxpagarController', ['$scope', '$rootScope', '$location', 'localStorageService', 'CuentaxpagarService', 'ProveedorService',
	function($scope, $rootScope, $location, localStorageService, CuentaxpagarService, ProveedorService) {

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
			var parametros = {
				descripcion: $scope.descripcion,
				fecha: $scope.fecha,
				total: $scope.total,
				numero_referencia: $scope.numero_referencia,
				proveedor_id: $scope.proveedor.id
			};

			if ($scope.proceso === 1) {
				CuentaxpagarService.insertarCuentaxpagar(parametros)
				.then(function(response) {
					// MANEJO DE RESPUESTA
					response = JSON.parse(response.respuesta);

					if (response.codigo === 1) {
						clearForm();
						//$scope.getCuentasxpagar();
						$location.path('gastos');
					}

					alert(response.mensaje);
				}, function(err){
					// MANEJO DE ERRORES
				});
			} else if ($scope.proceso === 2) {
				//Object.assign({id: $scope.id}, parametros);
				//parametros.id = $scope.id;
				modificarCuentaxpagar($scope.id, parametros);
			}
		}

		//modificar Proveedor
		function modificarCuentaxpagar(id, parametros) {
			var parametros = {
				id: id,
				descripcion: parametros.descripcion,
				fecha: parametros.fecha,
				total: parametros.total,
				numero_referencia: parametros.numero_referencia,
				proveedor_id: parametros.proveedor_id
			};
			CuentaxpagarService.modificarCuentaxpagar(parametros)
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
			}, function(err) {
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
					$scope.fecha = data.fecha;
					$scope.total = data.total;
					$scope.numero_referencia = data.numero_referencia;
					$scope.proveedor = {
						id: data.proveedor_id,
						name: data.nombre_proveedor
					};
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
		ProveedorService.getProveedores()
		.then(function(response) {
			$scope.proveedores = JSON.parse(response.respuesta).datos;
			$scope.proveedor = {
				id: "-1",
				name: "Seleccione una opción"
			};
		});

	}
]);

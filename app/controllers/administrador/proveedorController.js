'use strict';

angular.module('ProUrban')
.controller('proveedorController', ['$scope', '$rootScope', '$location', 'localStorageService', 'ProveedorService',
	function($scope, $rootScope, $location, localStorageService, ProveedorService) {
		$scope.getProveedores = getProveedores;
		$scope.insertarProveedor = insertarProveedor;
		$scope.modificarProveedor = modificarProveedor;
		$scope.eliminarProveedor = eliminarProveedor;
		$scope.buscarProveedor = buscarProveedor;

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

		//insertar Proveedor
		function insertarProveedor() {
			// console.log('descripcion:::', ($scope.descripcion);
			// console.log('ruc:::', $scope.ruc);
			ProveedorService.insertarProveedor($scope.descripcion, $scope.ruc)
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
		//modificar Proveedor
		function modificarProveedor() {
			// console.log('descripcion:::', ($scope.descripcion);
			// console.log('ruc:::', $scope.ruc);
			ProveedorService.modificarProveedor($scope.modDescripcion, $scope.modRuc, $scope.modId)
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

		//eliminar Proveedor
		function eliminarProveedor() {
			console.log('descripcion:::', $scope.delId);
			// console.log('ruc:::', $scope.ruc);
			ProveedorService.eliminarProveedor($scope.delId)
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

		//buscar el Proveedor para luego ser modificado
		function buscarProveedor() {
			console.log('descripcion:::', $scope.modId);
			// console.log('ruc:::', $scope.ruc);
			ProveedorService.buscarProveedor($scope.modId)
			.then(function(response) {
				// MANEJO DE RESPUESTA
				response = JSON.parse(response.respuesta)

				if (response.codigo === 1) {
					$scope.modi = response.datos;
					console.log($scope.modi);
				} else {
					alert(response.mensaje);
				}
			}, function(err){
				// MANEJO DE ERRORES
			});
		}

	}
]);

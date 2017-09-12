'use strict';

angular.module('ProUrban')
.controller('horariomantenimientoController', ['$scope', '$rootScope', '$location', 'localStorageService', 'HorariomantenimientoService',
	function($scope, $rootScope, $location, localStorageService, HorariomantenimientoService) {

		$scope.proceso = 1;	// 1: insertar
        
        $scope.getHorariomantenimiento = getHorariomantenimiento;
        $scope.insertarHorariomantenimiento = insertarHorariomantenimiento;
        $scope.modificarHorariomantenimiento = modificarHorariomantenimiento;
        $scope.eliminarHorariomantenimiento = eliminarHorariomantenimiento;
        $scope.buscarHorariomantenimiento = buscarHorariomantenimiento;

		/*$scope.getProveedores = getProveedores;
		$scope.insertarProveedor = insertarProveedor;
		$scope.modificarProveedor = modificarProveedor;
		$scope.eliminarProveedor = eliminarProveedor;
		$scope.buscarProveedor = buscarProveedor;*/

		function getHorariomantenimiento(){
          HorariomantenimientoService.getHorariomantenimiento()
          .then(function(response){
              response = JSON.parse(response.respuesta);
              
              if (response.codigo === 1){
                  $scope.data = response.datos;
              } else {
                  alert(response.mensaje);
              }
          }, function(err){
              
          });
        }
        /*function getProveedores() {
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
		}*/

		//	Insertar Proveedor
        function insertarHorariomantenimiento(){
            if ($scope.proceso === 1){
              HorariomantenimientoService.insertarHorariomantenimiento($scope.dias, $scope.desde, $scope.hasta, $scope.area, $scope.estado)
              .then(function(response){
                  response = JSON.parse(response.respuesta);
                  
                  if(response.codigo === 1){
                      clearForm();
                      $scope.getHorariomantenimiento();
                  }
                  alert(response.mensaje);
                  $location.path('/horariosmantenimiento');
              }, function(err){
                  
              });
            } else if ($rootScope.proceso === 2){
                modificarHorariomantenimiento();
            }
        }
		/*function insertarProveedor() {
			if ($scope.proceso === 1) {
				ProveedorService.insertarProveedor($scope.descripcion, $scope.ruc)
				.then(function(response) {
					// MANEJO DE RESPUESTA
					response = JSON.parse(response.respuesta);

					if (response.codigo === 1) {
						clearForm();
						$scope.getProveedores();
					}

					alert(response.mensaje);
				}, function(err){
					// MANEJO DE ERRORES
				});
			} else if ($scope.proceso === 2) {
				modificarProveedor();
			}
		}*/
		//modificar Proveedor
        function modificarHorariomantenimiento(){
            console.log($scope.id);
            HorariomantenimientoService.modificarHorariomantenimiento($scope.id, $scope.dias, $scope.desde, $scope.hasta, $scope.area, $scope.estado)
            .then(function(response){
                response = JSON.parse(response.respuesta);
                
                if(response.codigo === 1){
                    clearForm();
                    $scope.getHorariomantenimiento();
                    $scope.proceso = 1;
                }
                alert(response.mensaje);
                $location.path('/horariosmantenimiento');
            }, function(err){
                
            });
        }
		/*function modificarProveedor() {
			console.log($scope.id);
			ProveedorService.modificarProveedor($scope.id, $scope.descripcion, $scope.ruc)
			.then(function(response) {
				// MANEJO DE RESPUESTA
				response = JSON.parse(response.respuesta);

				if (response.codigo === 1) {
					clearForm();
					$scope.getProveedores();
					$scope.proceso = 1;	// 1: insertar
				}

				alert(response.mensaje);
			}, function(err){
				// MANEJO DE ERRORES
			});
		}*/

        function eliminarHorariomantenimiento(id){
            HorariomantenimientoService.eliminarHorariomantenimiento(id)
            .then(function(response){
                response = JSON.parse(response.respuesta);
                if (response.codigo === 1){
                    $scope.getHorariomantenimiento();
                }
                alert(response.mensaje);
            }, function(err){
                
            });
        }
		//eliminar Proveedor
		/*function eliminarProveedor(id) {
			ProveedorService.eliminarProveedor(id)
			.then(function(response) {
				// MANEJO DE RESPUESTA
				response = JSON.parse(response.respuesta);

				if (response.codigo === 1) {
					$scope.getProveedores();
				}

				alert(response.mensaje);
			}, function(err){
				// MANEJO DE ERRORES
			});
		}*/

		//buscar el Proveedor para luego ser modificado
        function buscarHorariomantenimiento(id){
            HorariomantenimientoService.buscarHorariomantenimiento(id)
            .then(function(response){
                response = JSON.parse(response.respuesta);
                if (response.codigo === 1){
                    var data = response.datos[0];
                    $rootScope.id = data.id;
                    $rootScope.dias = data.dias;
                    $rootScope.desde = data.desde;
                    $rootScope.hasta = data.hasta;
                    $rootScope.area = data.area;
                    $rootScope.estado = data.estado;
                    $rootScope.proceso = 2;
                }
            }, function(err){
                
            });
        }
		/*function buscarProveedor(id) {
			ProveedorService.buscarProveedor(id)
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
		}*/
        function clearForm(){
            $('#horariomantenimientoForm input[type="text"]').val("");
        }
        $scope.getHorariomantenimiento();

		//	Limpia los inputs de tipo text del formulario
		/*function clearForm() {
			$('#proveedorForm input[type="text"]').val("");
		}*/
        
		//$scope.getProveedores();

	}
]);

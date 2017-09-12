'use strict';

angular.module('ProUrban')
.controller('usuarioeController', ['$scope', '$rootScope', '$location', 'localStorageService', 'UsuarioService',
	function($scope, $rootScope, $location, localStorageService, UsuarioService) {

		$scope.proceso = 1;	// 1: insertar

		$scope.activarUsuario = activarUsuario;
		$scope.getUsuariose = getUsuariose;

		function getUsuariose() {
			UsuarioService.getUsuariose()
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

				//eliminar Usuario
		function activarUsuario(id) {
			UsuarioService.activarUsuario(id)
			.then(function(response) {
				// MANEJO DE RESPUESTA
				response = JSON.parse(response.respuesta);

				if (response.codigo === 1) {
					
					$scope.getUsuariose();
				}
				
				alert(response.mensaje);
			}, function(err){
				console.log("error en activarUsuario");
				$location.path('/usuarios');
			});
		}






		//	Limpia los inputs de tipo text del formulario
		function clearForm() {
			$('#usuarioForm input[type="text"]').val("");
		}

		$scope.getUsuariose();

	}
]);

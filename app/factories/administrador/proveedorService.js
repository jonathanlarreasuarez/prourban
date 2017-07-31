angular.module('ProUrban')
.factory("ProveedorService", ['$soap', '$rootScope', 'localStorageService', 'AppConfig',
	function($soap, $rootScope, localStorageService, AppConfig) {

		var service = {};

		service.getProveedores = getProveedores;
		service.createProveedor = createProveedor;

		return service;

		function getProveedores() {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl,"ListaProveedores");
		}

		function createProveedor(descripcion, ruc) {
			return $soap.post(AppConfig.apiUrl,"CrearProveedor",
				{ descripcion: descripcion, ruc: ruc });
		}
	}
]);
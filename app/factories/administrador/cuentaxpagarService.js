angular.module('ProUrban')
.factory("CuentaxpagarService", ['$soap', '$rootScope', 'localStorageService', 'AppConfig',
	function($soap, $rootScope, localStorageService, AppConfig) {

		var service = {};

		service.getCuentasxpagar = getCuentasxpagar;
		service.insertarCuentaxpagar = insertarCuentaxpagar;
		service.modificarCuentaxpagar = modificarCuentaxpagar;
		service.eliminarCuentaxpagar = eliminarCuentaxpagar;
		service.buscarCuentaxpagar = buscarCuentaxpagar;

		return service;


		function getCuentasxpagar() {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "ListaCuentasxpagar");
		}

		function insertarCuentaxpagar(descripcion, ruc) {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "InsertarCuentaxpagar",
					{ descripcion: descripcion, ruc: ruc });
		}

		function buscarCuentaxpagar(id) {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "BuscarCuentaxpagar",
					{ id: id });
		}

		function modificarCuentaxpagar(id, descripcion, ruc) {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "ModificarCuentaxpagar",
					{ id: id, descripcion: descripcion, ruc: ruc });
		}

		function eliminarCuentaxpagar(id) {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "EliminarCuentaxpagar",
					{ id: id });
		}
	}
]);

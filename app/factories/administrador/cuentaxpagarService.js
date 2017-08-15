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

		function insertarCuentaxpagar(parametros) {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			console.log(parametros);
			return $soap.post(AppConfig.apiUrl, "InsertarCuentaxpagar",
					parametros);
		}

		function buscarCuentaxpagar(id) {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "BuscarCuentaxpagar",
					{ id: id });
		}

		function modificarCuentaxpagar(parametros) {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			console.log(parametros);
			return $soap.post(AppConfig.apiUrl, "ModificarCuentaxpagar",
					parametros);
		}

		function eliminarCuentaxpagar(id) {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "EliminarCuentaxpagar",
					{ id: id });
		}
	}
]);

angular.module('ProUrban')
.factory("CuentasService", ['$soap', '$rootScope', 'localStorageService', 'AppConfig',
	function($soap, $rootScope, localStorageService, AppConfig) {

		var service = {};

		service.getCuentas = getCuentas;


		return service;

		function getCuentas() {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "ListaCuentas");
		}
    
	}
]);

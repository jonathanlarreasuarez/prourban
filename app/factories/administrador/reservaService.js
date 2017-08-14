 angular.module('ProUrban')
.factory("ReservaService", ['$soap', '$rootScope', 'localStorageService', 'AppConfig',
	function($soap, $rootScope, localStorageService, AppConfig) {

		var service = {};

		service.getReservas = getReservas;		

		return service;

		function getReservas() {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "ListaPreReservas");
		}
	}
]);

angular.module('ProUrban')
.factory("FacturaService", ['$soap', '$rootScope', 'localStorageService', 'AppConfig',
	function($soap, $rootScope, localStorageService, AppConfig) {

		var service = {};

		service.getCabeceraFactura = getCabeceraFactura;
		service.buscarCabeceraFactura = buscarCabeceraFactura;

		return service;

		function getCabeceraFactura() {
			return $soap.post(AppConfig.apiUrl, "ListaCabeceraFactura");
		}

		

		function buscarCabeceraFactura(id) {
			return $soap.post(AppConfig.apiUrl, "CabeceraFactura",
				{ id: id });
		}


}]);

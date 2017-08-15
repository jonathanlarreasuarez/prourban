angular.module('ProUrban')
.factory("FacturaService", ['$soap', '$rootScope', 'localStorageService', 'AppConfig',
	function($soap, $rootScope, localStorageService, AppConfig) {

		var service = {};

		service.buscarCabeceraFactura = buscarCabeceraFactura;
		service.init = init;

		return service;

		function init(id) {
			localStorageService.set('idCabeceraFactura', id);
		}

		function buscarCabeceraFactura(id) {
			return $soap.post(AppConfig.apiUrl, "CabeceraFactura",
				{ id: id });
		}
}]);

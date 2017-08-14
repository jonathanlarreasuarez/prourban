angular.module('ProUrban')
.factory("cuentaXcobrarService", ['$soap', '$rootScope', 'localStorageService', 'AppConfig',
	function($soap, $rootScope, localStorageService, AppConfig) {

		var service = {};

		service.getCuentaXcobrar = getCuentaXcobrar;
		service.buscarCuentaXcobrar = buscarCuentaXcobrar;


		return service;

		function getCuentaXcobrar(nombrexBuscar) {
			console.log('nombrexBuscar',nombrexBuscar);
			return $soap.post(AppConfig.apiUrl, "ListaCuentaxcobrar",
				{ nombrexBuscar: nombrexBuscar });
		}


		function buscarCuentaXcobrar(id) {
			return $soap.post(AppConfig.apiUrl, "CabeceraFactura",
				{ id: id });
		}



}]);

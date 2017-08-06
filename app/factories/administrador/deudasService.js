angular.module('ProUrban')
.factory("DeudasService", ['$soap', '$rootScope', 'localStorageService', 'AppConfig',
	function($soap, $rootScope, localStorageService, AppConfig) {

		var service = {};

		service.getDeudas = getDeudas;
		

		return service;

		function getDeudas() {
			return $soap.post(AppConfig.apiUrl, "ListaDeudasUsuarios");
		}

		

}]);

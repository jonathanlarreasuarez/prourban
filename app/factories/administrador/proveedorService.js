angular.module('ProUrban')
.factory("ProveedorService", ['$soap', '$rootScope', 'localStorageService',
	function($soap, $rootScope, localStorageService) {

		//	Url del servicio web
		//var base_url = "https://modoux.com/server/view/server.php?wsdl";
		var base_url = "http://localhost/server/view/server.php?wsdl";

		var service = {};

		service.getProveedores = getProveedores;

		return service;

		function getProveedores() {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(base_url,"ListaProveedores");
		}

}]);
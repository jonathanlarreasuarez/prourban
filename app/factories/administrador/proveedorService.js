angular.module('ProUrban')
.factory("ProveedorService", ['$soap', '$rootScope', 'localStorageService',
	function($soap, $rootScope, localStorageService) {

		//	Url del servicio web
		//var base_url = "https://modoux.com/server/view/server.php?wsdl";
		var base_url = "http://localhost/server/view/server.php?wsdl";

		var service = {};

		service.getProveedores = getProveedores;

		service.insertarProveedor = insertarProveedor;

		service.modificarProveedor = modificarProveedor;

		service.eliminarProveedor = eliminarProveedor;

		service.buscarProveedor = buscarProveedor;

		return service;

		function getProveedores() {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(base_url,"ListaProveedores");
		}

		function insertarProveedor(descripcion, ruc) {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(base_url,"insertarProveedor", {descripcion: descripcion, ruc: ruc});
		}

		function buscarProveedor(id) {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(base_url,"buscarProveedor", {id: id});
		}

		function modificarProveedor(descripcion, ruc, id) {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(base_url,"modificarProveedor", {descripcion: descripcion, ruc: ruc, id: id});
		}

		function eliminarProveedor(id) {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(base_url,"eliminarProveedor", {id: id});
		}

}]);

angular.module('ProUrban')
.factory("AuthenticationService", ['$soap', '$rootScope', 'localStorageService',
	function($soap, $rootScope, localStorageService) {
		//var base_url = "https://modoux.com/server/view/server.php?wsdl";
		var base_url = "http://localhost/server/view/server.php?wsdl";

		var service = {};

		service.init = init;
		service.login = login;
		service.setCredentials = setCredentials;
		service.getCredentials = getCredentials;
		service.isLoggedIn = isLoggedIn;

		return service;

		function init() {
			return isLoggedIn();
		}

		function login(usuario, clave) {
			return $soap.post(base_url,"Auth",
				{ usuario: usuario, clave: clave});
		}

		function setCredentials(data) {
			localStorageService.set('usuario', data);
			$rootScope.usuario = data.nombre_usuario;
			$rootScope.nombre = fullName(data.primer_nombre, data.primer_apellido);
		}

		function getCredentials(usuario, clave) {
			return localStorageService.get('usuario');
		}

		function isLoggedIn() {
			if (localStorageService.length() > 0) {
				return true;
			} else { return false; }
	    }

	    function fullName(nombre, apellido) {
	    	return nombre + " " + apellido;
	    }

	    function isEmpty(obj) {
	    	return jQuery.isEmptyObject(obj);
	    }
}]);
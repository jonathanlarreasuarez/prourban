angular.module('ProUrban')
.factory("AreaService", ['$soap', '$rootScope', 'localStorageService', 'AppConfig',
	function($soap, $rootScope, localStorageService, AppConfig) {

        var service = {};
        
        service.getAreas = getAreas;
        service.getListaAreasInactivas = getListaAreasInactivas;
        service.insertarArea = insertarArea;
        service.modificarArea = modificarArea;
        service.eliminarArea = eliminarArea;
        service.buscarArea = buscarArea;
        service.cambiarEstadoArea = cambiarEstadoArea;
        
        return service;
        
        function getAreas(){
            return $soap.post(AppConfig.apiUrl, "ListaAreas");
        }
        
        function getListaAreasInactivas(){
            return $soap.post(AppConfig.apiUrl, "ListaAreasInactivas");
        }

		function insertarArea(descripcion, valor, estado){
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "InsertarArea",
				{ descripcion: descripcion, valor: valor, estado: estado });
		}
        

		function buscarArea(id) {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "BuscarArea",
				{ id: id });
		}

		function modificarArea(id, descripcion, valor, estado) {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "ModificarArea",
                              { id: id, descripcion: descripcion, valor: valor, estado: estado });
		}

		function eliminarArea(id) {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "EliminarArea",
				{ id: id });
		}
        
        function cambiarEstadoArea(id) {
            
            return $soap.post(AppConfig.apiUrl, "CambiarEstadoArea",
                { id: id });
        }
        

}]);

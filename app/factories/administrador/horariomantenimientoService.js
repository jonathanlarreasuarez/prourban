angular.module('ProUrban')
.factory("HorariomantenimientoService", ['$soap', '$rootScope', 'localStorageService', 'AppConfig',
	function($soap, $rootScope, localStorageService, AppConfig) {

		var service = {};

        service.getHorariomantenimiento = getHorariomantenimiento;
        service.insertarHorariomantenimiento = insertarHorariomantenimiento;
        service.modificarHorariomantenimiento = modificarHorariomantenimiento;
        service.eliminarHorariomantenimiento = eliminarHorariomantenimiento;
        service.buscarHorariomantenimiento = buscarHorariomantenimiento;
        
        return service;

        
          function getHorariomantenimiento(){
              return $soap.post(AppConfig.apiUrl, "ListaHorariosmantenimiento");
          }
		/*function getProveedores() {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "ListaProveedores");
		}*/
         function insertarHorariomantenimiento(dias, desde, hasta, area, estado){
             return $soap.post(AppConfig.apiUrl, "InsertarHorariosmantenimiento",
                              { dias: dias, desde: desde, hasta: hasta, area: area, estado: estado });
         }
		/*function insertarProveedor(descripcion, ruc) {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "InsertarProveedor",
				{ descripcion: descripcion, ruc: ruc });
		}*/
         function buscarHorariomantenimiento(id){
             return $soap.post(AppConfig.apiUrl, "BuscarHorariosmantenimiento",
                              { id: id });
         }
		/*function buscarProveedor(id) {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "BuscarProveedor",
				{ id: id });
		}*/
         function modificarHorariomantenimiento(id, dias, desde, hasta, area, estado){
             return $soap.post(AppConfig.apiUrl, "ModificarHorariosmantenimiento",
                              { id: id, dias: dias, desde: desde, hasta: hasta, area: area, estado: estado });
         }
		/*function modificarProveedor(id, descripcion, ruc) {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "ModificarProveedor",
					{ id: id, descripcion: descripcion, ruc: ruc });
		}*/

        function eliminarHorariomantenimiento(id){
            return $soap.post(AppConfig.apiUrl, "EliminarHorariosmantenimiento",
                             { id: id });
        }
		/*function eliminarProveedor(id) {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "EliminarProveedor",
				{ id: id });
		}*/

}]);

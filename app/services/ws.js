angular.module('ProUrban')
.factory("testService", ['$soap',function($soap) {
	var base_url = "http://localhost/webservice/WS_BOLETOS/views/servidor_web.php";

	return {
		ListaEventosXcategoria: function(categoria) {
			return $soap.post(base_url,"ListaEventosXcategoria",
				{ categoria: categoria });
		}
	}
}])
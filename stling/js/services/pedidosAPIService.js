angular.module("stling").factory("pedidosAPI", function ($http, config) {

	var _salvar = function (pedido) {
		return $http.post(config.baseUrl + "/pedidoService/salvar", pedido);
	};

	var _getPedidos = function () {
		return $http.get(config.baseUrl + "/pedidoService/listar");
	};

	return {
		getPedidos: _getPedidos,
		salvar: _salvar
	};

});
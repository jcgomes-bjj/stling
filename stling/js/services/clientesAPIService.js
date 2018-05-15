angular.module("stling").factory("clientesAPI", function ($http, config) {

    var _getClientes = function () {
        return $http.get(config.baseUrl + "/clienteService/listar");
    };

    return {
        getClientes: _getClientes
    };

});
angular.module("stling").factory("usuariosAPI", function ($http, config) {
    var _getVendedores = function () {
        return $http.get(config.baseUrl + "/usuarioService/listarVendedores");
    };

    return {
        getVendedores: _getVendedores
    };

});
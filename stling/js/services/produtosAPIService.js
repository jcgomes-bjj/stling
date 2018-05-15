angular.module("stling").factory("produtosAPI", function ($http, config) {

    var _getProdutos = function () {
        console.log(config.baseUrl + "/produtoService/listar");
        return $http.get(config.baseUrl + "/produtoService/listar");
    };

    return {
        getProdutos: _getProdutos
    };

});
angular.module("stling").factory("pedidosProdutosAPI", function ($http, config) {

    var _ItensPedido = function (idPedido) {
        return $http.get(config.baseUrl + "/pedidoProdutoService/findItensPedido/" + idPedido);
    };

    var _salvar = function (idPedido, listItensPedido) {
        for (let index = 0; index < listItensPedido.length; index++) {
            const item = array[index];
            item.pedido = idPedido;
            
        }
        return $http.post(config.baseUrl + "/pedidoProdutoService/salvarItens", listItensPedido);
    };

    return {
        getItensPedido: _ItensPedido,
        salvar: _salvar
    };

});
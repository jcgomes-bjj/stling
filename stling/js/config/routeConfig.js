angular.module("stling").config(function ($routeProvider) {

	$routeProvider.when("/login", {
		templateUrl: "view/login.html",
		controller: "loginCtrl"
	});

	$routeProvider.when("/pedidos/:email/:nome", {
		templateUrl: "view/pedidos.html",
		controller: "pedidosCtrl",
		resolve: {
			pedidos: function (pedidosAPI) {
				return pedidosAPI.getPedidos();
			},
			clientes: function (clientesAPI) {
				return clientesAPI.getClientes();
			},
			vendedores: function (usuariosAPI) {
				return usuariosAPI.getVendedores();
			},
			produtos: function (produtosAPI) {
				return produtosAPI.getProdutos();
			}
		}
	});

	$routeProvider.otherwise({ redirectTo: "/login" });

});
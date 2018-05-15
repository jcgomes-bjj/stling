angular.module('stling').controller('pedidosCtrl', function ($scope, clientes, vendedores, pedidos, produtos, $filter, $location, $routeParams, pedidosAPI, pedidosProdutosAPI) {

	$scope.adicionado = false;
	$scope.erro = false;
	$scope.clientes = clientes.data;
	$scope.vendedores = vendedores.data;
	$scope.mostrarFormNovoPedido = false;
	$scope.textoBusca = '';
	$scope.listaPesquisada = [];
	$scope.txtResultadoBusca = '';
	$scope.listaPedidos = pedidos.data;
	$scope.listaProdutos = produtos.data;
	$scope.listaProdutosPedido = [];
	$scope.numeroPedidoAdicionado = '';
	$scope.usuario = {
		nome: $routeParams.nome,
		email: $routeParams.email
	};

	$scope.selecionarPedido = function (pedido) {
		pedido.selecionado = !pedido.selecionado;
	};

	$scope.pesquisarPedidos = function () {
		if ($scope.textoBusca != '') {
			$scope.listaPesquisada = $scope.listaPedidos.filter(function (el) {
				return (el.id.toLowerCase().indexOf($scope.textoBusca.toLowerCase()) > -1);
			}).map(function (el) {
				return el;
			}).sort();

		} else {
			$scope.listaPesquisada = $scope.listaPedidos;
		}
	};

	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};

	$scope.exibirFormulario = function () {
		$scope.mostrarFormNovoPedido = !$scope.mostrarFormNovoPedido;
	};

	$scope.salvar = function (pedido) {
		pedidosAPI.salvar(pedido).then(function (response) {
			if (response.status === 201) {	
				$scope.adicionado = true;
				$scope.erro = false;
				$scope.listaPedidos.push(response.data);
				$scope.mostrarFormNovoPedido = !$scope.mostrarFormNovoPedido;
				delete $scope.pedido;
				$scope.pedidoForm.$setPristine();
				$scope.numeroPedidoAdicionado = response.data.id;
				pedidosProdutosAPI.salvar(response.data.id, $scope.listaProdutosPedido);

			} else {
				$scope.adicionado = false;
				$scope.erro = true;
			}
		});
	};

	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};

	$scope.editarPedido = function (pedido) {
		$scope.pedido = pedido;
		$scope.listaProdutosPedido = pedidosProdutosAPI.getItensPedido(pedido.id)
		$scope.mostrarFormNovoPedido = true;
	};

	$scope.adicionarProdutoPedido = function (produto) {		
		$scope.listaProdutosPedido.push(produto);
	};

	$scope.excluirProdutoPedido = function (produto) {
		$scope.listaProdutosPedido.pop(produto);
	}

});



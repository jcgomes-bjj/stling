angular.module('stling').controller('loginCtrl', function ($scope, $location, loginAPI) {
	$scope.erro = false;
	$scope.usuario = { "email": "", "senha": "" };
	$scope.login = function (usuario) {
		loginAPI.login(usuario).then(function (response) {
			if (response.status === 201) {
				$location.path('/pedidos/' + response.data.email + "/" + response.data.nome);
			} else {
				$scope.erro = true;
			}
		});
	};

});
angular.module("stling").factory("loginAPI", function ($http, config, $location) {
	var _login = function (usuario) {
		return $http.post(config.baseUrl + "/loginService/login", usuario);
	};

	return {
		login: _login
	};

});
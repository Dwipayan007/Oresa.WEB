/// <reference path="../app.js" />
ores.factory("devSignupService", ["$http", "$q", "baseService", function ($http, $q, baseService) {

    var devSignupFactory = {};

    var _devberSignup = function (developer) {
        var deffer = $q.defer();
        $http.post(baseService + 'api/devSignup/', developer, {
            headers: { 'Content-Type': 'application/json;charset=utf-8' }
        }).success(function (data, status) {
            deffer.resolve(data, status);
        }).error(function (result, status) {
            deffer.reject(result);
        });
        return deffer.promise;
    };
    devSignupFactory.devberSignup = _devberSignup;
    return devSignupFactory;

}]);
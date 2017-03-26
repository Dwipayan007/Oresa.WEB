/// <reference path="../app.js" />
ores.factory("memSignupService", ["$http", "$q", "baseService", function ($http, $q, baseService) {

    var memSignupFactory = {};

    var _memberSignup = function (member) {
        var deffer = $q.defer();
        $http.post(baseService + 'api/MemSignup/', member, {
            headers: { 'Content-Type': 'application/json;charset=utf-8' }
        }).success(function (data, status) {
            deffer.resolve(data, status);
        }).error(function (result, status) {
            deffer.reject(result);
        });
        return deffer.promise;
    };
    memSignupFactory.memberSignup = _memberSignup;
    return memSignupFactory;

}]);
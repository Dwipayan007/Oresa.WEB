/// <reference path="../app.js" />
ores.factory("loginService", ["$http", "$q", "localStorageService", "baseService", function ($http, $q, localStorageService,baseService) {

    var _authentication = {
        isAuth: false,
        username: "",
        userType: "",
        uid:""
    };

    var loginServiceFactory = {};

    var _devloginLogin = function (ldata) {
        var deffer = $q.defer();
        $http.post(baseService + 'api/Login/', ldata, {
            headers: { 'Content-Type': 'application/json;charset=utf-8' }
        }).success(function (data, status) {
            if (data !== false) {
                _authentication.isAuth = true;
                _authentication.username = ldata.username;
                _authentication.userType = ldata.userType;
                _authentication.uid = data;
                localStorageService.set('authorizationData', { userName: ldata.username, userType: ldata.userType, uid: data });
            }
            deffer.resolve(data, status);
        }).error(function (result, status) {
            deffer.reject(result);
        });
        return deffer.promise;
    };

    var _memlogin = function (ldata) {
        var deffer = $q.defer();
        $http.post(baseService + 'api/Login/', ldata, {
            headers: { 'Content-Type': 'application/json;charset=utf-8' }
        }).success(function (data, status) {
            if (data !== false) {
                _authentication.isAuth = true;
                _authentication.username = ldata.username;
                _authentication.userType = ldata.userType;
                _authentication.uid = data;
                localStorageService.set('authorizationData', { userName: ldata.username, userType: ldata.userType ,uid:data});
            }
            deffer.resolve(data, status);
        }).error(function (result, status) {
            deffer.reject(result);
        });
        return deffer.promise;
    };


    //Logout Service
    var _logOut = function () {
        localStorageService.remove('authorizationData');
        _authentication.isAuth = false;
        _authentication.username = "";
        _authentication.userType = "";
        _authentication.uid = "";
    };

    //Get all the autho Data
    var _fillAuthData = function () {
        var authData = localStorageService.get('authorizationData');
        if (authData) {
            _authentication.username = authData.username;
            _authentication.userType = authData.userType;
            _authentication.uid = authData.uid;
            _authentication.isAuth = true;
        }
    };

    loginServiceFactory.fillAuthData = _fillAuthData;
    loginServiceFactory.logOut = _logOut;
    loginServiceFactory.authentication = _authentication;
    loginServiceFactory.devloginLogin = _devloginLogin;
    loginServiceFactory.memlogin = _memlogin;
    return loginServiceFactory;

}]);
/// <reference path="../app.js" />
ores.controller("devLoginCntrl", ["$scope", "$location", "localStorageService", "ShareService", "loginService", function ($scope, $location, localStorageService, ShareService, loginService) {
    $scope.fnGoToPage = function (args) {
        $location.path('/' + args);
    }
    $scope.setUserType = function () {
        ShareService.getUserType("D");
        localStorageService.set('utype', "D");
    };
    $scope.devLogin = function (ldata) {
        $scope.loginData = ldata;
        $scope.loginData.userType = "D";
        loginService.devloginLogin($scope.loginData).then(function (res) {
            if (res != "error") {
                $location.path('/devprofile');
            }
        });
    };
    $scope.setUserType();
}])
/// <reference path="../app.js" />
ores.controller("memLoginCtrl", ["$scope", "$location", "loginService", "localStorageService", "ShareService", function ($scope, $location, loginService,localStorageService, ShareService) {
    
    $scope.fnGoToPage = function (args) {
        $location.path('/' + args);
    }

    $scope.setUserType = function () {
        ShareService.getUserType("M");
        localStorageService.set('utype', "M");
    };

    $scope.memberLogin = function (ldata) {
        debugger;
        $scope.loginData = ldata;
        $scope.loginData.userType = "M";
        loginService.memlogin($scope.loginData).then(function (res) {
            if (res !== "error") {
                $location.path('/memprofile');
            }
        });
    };
    $scope.setUserType();
}])
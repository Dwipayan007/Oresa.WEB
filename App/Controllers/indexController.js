/// <reference path="../app.js" />
ores.controller("indexController", ["$scope", "$http", "$location", "mobileCheck", "loginService", function ($scope, $http, $location, mobileCheck, loginService) {
    if (mobileCheck) {
        angular.element(document.querySelector("#bs-example-navbar-collapse-2")).removeClass("banner-right");
        angular.element(document.querySelector("#about-tabs")).removeClass("all_pad");
        angular.element(document.querySelector("#about-tabs")).addClass("all_pad1");
    }
    $scope.fnGoToPage = function (args) {
        $location.path('/' + args);
    };
    $scope.logOut = function () {
        loginService.logOut();
        $location.path('/home');
    };
    $scope.authentication = loginService.authentication;
}])
/// <reference path="../app.js" />
ores.controller("circularsCntrl", ["$scope", "$http", "$location", "mobileCheck", function ($scope, $http, $location, mobileCheck) {
    if (mobileCheck) {
        angular.element(document.querySelector("#bs-example-navbar-collapse-2")).removeClass("banner-right");
        angular.element(document.querySelector("#about-tabs")).removeClass("all_pad");
        angular.element(document.querySelector("#about-tabs")).addClass("all_pad1");
    }
    $scope.fnGoToPage = function (args) {
        $location.path('/' + args);
    }
}])
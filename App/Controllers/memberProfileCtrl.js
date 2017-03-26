/// <reference path="../app.js" />
ores.controller("memberProfileCntrl", ["$scope", "$location", "loginService", function ($scope, $location, loginService) {
    $scope.fnGoToPage = function (args) {
        $location.path('/' + args);
    };
}])
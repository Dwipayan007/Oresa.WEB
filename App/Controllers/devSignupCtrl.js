/// <reference path="../app.js" />
ores.controller("devSignupCtrl", ["$scope", "$location", "devSignupService", function ($scope, $location,devSignupService) {
    $scope.developer = {};
    $scope.developer.userType = "D";
    $scope.saveDeveloper = function () {
        devSignupService.devberSignup($scope.developer).then(function (res) {
            if (res) {
                $location.path("/devlogin");
            }
        });
    };
}]);
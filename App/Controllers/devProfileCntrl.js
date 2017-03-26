/// <reference path="../app.js" />
ores.controller("devProfileCntrl", ["$scope", "$location", "uploadService", function ($scope, $location, uploadService) {
    $scope.cproject = [];
    $scope.oproject = [];
    $scope.uproject = [];
    $scope.myFile1 = [];
    $scope.myFile2 = [];
    $scope.myFile3 = [];
    $scope.tab = 1;

    $scope.loader = {
        loading1: false,
        loading2: false,
        loading3: false
    };
    $scope.labels = [{
        l1: "COMPLETED PROJECTS",
        l2: "ONGOING PROJECTS",
        l3: "UPCOMING PROJECTS"
    }]



    $scope.fnGoToPage = function (args) {
        $location.path('/' + args);
    };

    $scope.selectTab = function (setTab) {
        $scope.tab = setTab;
    };
    $scope.isSelected = function (checkTab) {
        return $scope.tab === checkTab;
    };

    $scope.uploadProject = function (lable) {
        var file = {};
        if ($scope.labels[0].l1 === lable)
        {
            $scope.loader.loading1 = true;
            file = $scope.cproject;
            if ($scope.myFile1 !== undefined)
                file["file"] = $scope.myFile1;
        }

        if ($scope.labels[0].l2 === lable) {
            $scope.loader.loading2 = true;
            file = $scope.oproject;
            if ($scope.myFile2 !== undefined)
                file["file"] = $scope.myFile2;
        }

        if ($scope.labels[0].l3 === lable) {
            $scope.loader.loading3 = true;
            file = $scope.oproject;
            if ($scope.myFile3 !== undefined)
                file["file"] = $scope.myFile3;
        }
        
        uploadService.uploadFileToUrl(file).then(function (data) {
            if (data === "") {
                $scope.loader.loading1 = false;
                $scope.loader.loading2 = false;
                $scope.loader.loading3 = false;
                $scope.mesgNnews = "Uploaded Successfully";
            }
            else {
                $scope.loader.loading1 = false;
                $scope.loader.loading2 = false;
                $scope.loader.loading3 = false;
                $scope.mesgNnews = "Not Successful";
            }
            file = null;
            
        });
        $scope.resetForm(lable);
    };

    $scope.resetForm = function (lable) {
        if (lable === $scope.labels[0].l1) {
            angular.element(document.querySelector('#file1')).val(null);
            $scope.myFile1 = undefined;
            $scope.cproject = [];
            //Array.prototype.clear = function () {
            //    while ($scope.cproject.length) {
            //        $scope.cproject.pop();
            //    }
            //};

        }
        else if (lable === $scope.labels[0].l2) {

            angular.element(document.querySelector('#file2')).val(null);
            $scope.myFile2 = undefined;
            $scope.oproject = [];
            //Array.prototype.clear = function () {
            //    while ($scope.oproject.length) {
            //        $scope.oproject.pop();
            //    }
            //};
            
        }
        else if (lable === $scope.labels[0].l3) {

            angular.element(document.querySelector('#file3')).val(null);
            $scope.myFile3 = undefined;
            $scope.uproject = [];

            //Array.prototype.clear = function () {
            //    while ($scope.uproject.length) {
            //        $scope.uproject.pop();
            //    }
            //};
        }
    };
}])
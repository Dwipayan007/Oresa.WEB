/// <reference path="../app.js" />
ores.controller("memberProfileCntrl", ["$scope", "$location", "loginService", 'memProfileService', 'localStorageService', function ($scope, $location, loginService, memProfileService, localStorageService) {
    $scope.Membership_ID = '';
    $scope.MembershipData = [];
    $scope.message = "";
    $scope.fnGoToPage = function (args) {
        $location.path('/' + args);
    };
    $scope.loader = {
        loading1: false,
        loading2: false
    };
    $scope.GetMembershipData = function (MemId) {
        memProfileService.GetMembershipData(MemId).then(function (MemData) {
            debugger;
            if (MemData) {
                $scope.MembershipData = MemData;
            }
        });
    }
    $scope.GetMembershipIdentity = function () {
        debugger;
        var authData = localStorageService.get('authorizationData');
        $scope.Membership_ID = authData.uid;
        if ($scope.Membership_ID) {
            $scope.GetMembershipData($scope.Membership_ID)
        }
    }
    $scope.GetMembershipIdentity();
    $scope.files = [];
    $scope.uploadCompletedProject = function (completedProject) {
        debugger;
        $scope.fileName = [];
        var authData = localStorageService.get('authorizationData');
        if (authData) {
            completedProject.Membership_ID = authData.uid;
            for (var i = 0; i < $scope.files.length; i++) {
                $scope.fileName.push($scope.files[i]._file);
            }
            completedProject.file = $scope.fileName;
            completedProject.ptype = "Completed";
            $scope.loader.loading1 = true;
            memProfileService.UploadMembershipProject(completedProject).then(function (data) {
                if (data === "") {
                    $scope.loader.loading1 = false;
                    $scope.mesgHnews = "Uploaded Successfully";
                    completedProject = null;
                    $scope.files = [];
                    angular.element(document.querySelector('#completed')).val(null);
                    $scope.files = undefined;
                }
                else {
                    $scope.loader.loading1 = false;
                    $scope.mesgHnews = "Not Successful";
                    $scope.files = [];
                    angular.element(document.querySelector('#completed')).val(null);
                    $scope.files = undefined;
                }
            });
        }
        else {
            $scope.message = "Please Login Before Upload Projects"
        }
    };

    $scope.uploadUpcomingProject = function (upcoming) {
        debugger;
        $scope.fileName = [];
        var authData = localStorageService.get('authorizationData');
        if (authData) {
            upcoming.Membership_ID = authData.uid;
            for (var i = 0; i < $scope.files.length; i++) {
                $scope.fileName.push($scope.files[i]._file);
            }
            upcoming.file = $scope.fileName;
            upcoming.ptype = "Upcoming";
            $scope.loader.loading2 = true;
            memProfileService.UploadMembershipProject(upcoming).then(function (data) {
                if (data === "") {
                    $scope.loader.loading2 = false;
                    $scope.mesgHnews = "Uploaded Successfully";
                    upcoming = null;
                    $scope.files = [];
                    angular.element(document.querySelector('#upcoming')).val(null);
                    $scope.files = undefined;
                }
                else {
                    $scope.loader.loading2 = false;
                    $scope.mesgHnews = "Not Successful";
                    $scope.files = [];
                    angular.element(document.querySelector('#upcoming')).val(null);
                    $scope.files = undefined;
                }
            });
        }
        else {
            $scope.message = "Please Login Before Upload Projects";
        }
    };

}])
ores.factory('memProfileService', ['$http', '$q', 'baseService', function ($http, $q, baseService) {
    var memProfileFactory = {};
    var getModelAsFormData = function (data) {
        debugger;
        var dataAsFormData = new FormData();
        dataAsFormData.append("Membership_ID", data.Membership_ID);
        dataAsFormData.append("ptype", data.ptype);
        dataAsFormData.append("noofunit", data.noofunit);
        dataAsFormData.append("ProjectType", data.ProjectType);
        dataAsFormData.append("Location", data.Location);
        dataAsFormData.append("ProjectName", data.ProjectName);
        for (var i = 0; i < data.file.length;i++){
            dataAsFormData.append('file', data.file[i]);
        }
        return dataAsFormData;
    }

    var _UploadMembershipProject = function (file) {
        debugger;
        var deffer = $q.defer();
        $http({
            url: baseService + 'api/MemProfile/',
            method: "POST",
            data: getModelAsFormData(file),
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        }).success(function (result, status) {
            deffer.resolve(result, status);
        }).error(function (result, status) {
            deffer.reject(result);
        });
        return deffer.promise;
    };

    var _GetMembershipData = function (memID) {
        debugger;
        var deffer = $q.defer();
        $http.get(baseService + 'api/MemProfile/' + memID).success(function (data, status) {
            deffer.resolve(data);
        }).error(function (err, status) {
            deffer.reject(err);
        });
        return deffer.promise;
    };

    memProfileFactory.UploadMembershipProject = _UploadMembershipProject;
    memProfileFactory.GetMembershipData = _GetMembershipData;
    return memProfileFactory;
}]);
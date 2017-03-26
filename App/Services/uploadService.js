/// <reference path="../app.js" />
ores.factory('uploadService', ['$http', '$q', 'baseService', function ($http, $q, baseService) {
    var uploadServiceFactory = {};
    //File Upload
    var getModelAsFormData = function (data) {
        var dataAsFormData = new FormData();
        dataAsFormData.append("noofunits", data.noofunits);
        dataAsFormData.append("Project_Name", data.Project_Name);
        dataAsFormData.append("Project_Type", data.Project_Type);
        dataAsFormData.append("location", data.location);

        for (var i = 0; i < data.file.length; i++) {
            if(data.file[i]._file)
            {
                dataAsFormData.append("file", data.file[i]._file);
            }
        }

        return dataAsFormData;
    };
    //File Upload Service
    var _uploadFileToUrl = function (file) {

        var deffer = $q.defer();
        $http({
            url: baseService + 'api/uploadProject/',
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

    uploadServiceFactory.uploadFileToUrl = _uploadFileToUrl;

    return uploadServiceFactory;
}]);
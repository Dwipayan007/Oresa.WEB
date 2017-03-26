/// <reference path="../app.js" />
ores.directive('imageUpload', ['$parse', function ($parse) {
    //return {
    //    restrict: 'A',
    //    link: function (scope, element, attrs) {

    //        var model = $parse(attrs.imageUpload);
    //        var modelSetter = model.assign;
    //        element.bind('change', function () {

    //            scope.$apply(function () {

    //                modelSetter(scope, element[0].files[0]);
    //            });
    //        });
    //    }
    //};

    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var model = $parse(attrs.imageUpload);
            var isMultiple = attrs.multiple;
            var modelSetter = model.assign;
            element.bind('change', function () {
                var values = [];
                angular.forEach(element[0].files, function (item) {
                    var value = {
                        // File Name 
                        name: item.name,
                        //File Size 
                        size: item.size,
                        //File URL to view 
                        url: URL.createObjectURL(item),
                        // File Input Value 
                        _file: item
                    };
                    values.push(value);
                });
                scope.$apply(function () {
                    if (isMultiple) {
                        modelSetter(scope, values);
                    } else {
                        modelSetter(scope, values[0]);
                    }
                });
            });
        }
    };
}]);

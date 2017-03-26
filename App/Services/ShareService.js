/// <reference path="../app.js" />
ores.factory("ShareService", ["$rootScope", function ($rootScope) {
    var shareServiceFactory = {};
    shareServiceFactory.usertype = '';
    var _getUserType = function (utype) {
        this.usertype = utype;
        this.broadcastUserType();
    };
    var _broadcastUserType = function () {
        return shareServiceFactory.usertype;
    };

    shareServiceFactory.broadcastUserType = _broadcastUserType;
    shareServiceFactory.getUserType = _getUserType;

    return shareServiceFactory;
}]);
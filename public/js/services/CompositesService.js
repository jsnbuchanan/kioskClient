'use strict';
compositesApp.factory('CompositesService', ['$http', '$log', function ($http, $log) {
    return {
        getBeans: function (successCb) {
            $http({method: 'GET', url: 'http://localhost:8080/composites'}).success(function (data) {
                successCb(data);
            }).error(function (data, status, headers, cfg) {
                console.log("There was an error with message", data);
                $log.warn(data, status, headers(), cfg);
            });
        }
    };
}]);
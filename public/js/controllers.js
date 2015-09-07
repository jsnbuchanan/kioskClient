'use strict';

compositesApp.controller('CompositesCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('http://rest-service.guides.spring.io/greeting').success(function (data) {
        $scope.greeting = data;
    }).error(function (msg) {
        console.log(msg);
    });
}]);
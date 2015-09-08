'use strict';

compositesApp.controller('CompositesCtrl', ['$scope', 'CompositesService', function ($scope, CompositesService) {
    $scope.composite = {
        foreground: 'foreground.png',
        photo: 'mainPhoto.png',
        background: 'background.jpg'
    };
    CompositesService.getBeans(function (data) {
        $scope.beans = data;
    });
    //$http.get('http://localhost:8080/beans')
    //});
}]);
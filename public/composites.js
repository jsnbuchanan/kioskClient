function Composites($scope, $http) {
    $http.get('http://rest-service.guides.spring.io/greeting').success(function (data) {
        $scope.greeting = data;
    })
}
app.controller('HomeCtrl', function($scope, $http) {
    $scope.title = 'Strona główna';
    $scope.projects = [];
    $scope.index= 0;

    $http.get("server/banner-data.js")
        .then(function (response) {
            $scope.projects = response.data;
        });

    $scope.changeImage = function(index) {
        $scope.index = index;
    }
});

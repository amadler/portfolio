var app = angular.module('appPorfolio',['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
            $routeProvider.
                when('/', {templateUrl: 'templates/home.html',   controller: HomeCtrl}).
                when('/about', {templateUrl: '/templates/about.html',   controller: ListCtrl}).
                otherwise({redirectTo: '/'});
    }]);

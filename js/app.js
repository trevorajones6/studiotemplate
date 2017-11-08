var myApp = angular.module('myApp', [
    'ngRoute',
    'ngResource',
    'ngAnimate'
]);

myApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix('');
    $routeProvider.
        when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'homeController'
        }).
        when('/about', {
            templateUrl: 'partials/about.html',
            controller: 'aboutController'
        }).
        when('/contact', {
            templateUrl: 'partials/contact.html',
            controller: 'contactController'
        }).
        when('/portfolio', {
            templateUrl: 'partials/portfolio.html',
            controller: 'portfolioController'
        }).
        when('/services', {
            templateUrl: 'partials/services.html',
            controller: 'servicesController'
        }).
        when('/team', {
            templateUrl: 'partials/team.html',
            controller: 'teamController'
        }).
        otherwise({
            redirectTo: '/home'
        });
}]);
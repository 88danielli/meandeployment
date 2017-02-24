var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'partials/dashboard.html',
    })
    .when('/customers', {
        templateUrl: 'partials/customers.html',
        controller: 'customersController',
    })
    .otherwise('/')
});

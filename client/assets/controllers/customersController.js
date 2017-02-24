var app = angular.module('app');

app.controller('customersController', function($scope, StoreFactory, $location) {
    console.log("customersController loaded");
    $scope.errors = {};

    StoreFactory.getCustomers(function(data) {
        $scope.friends = data;
    })

    $scope.create = function () {
        StoreFactory.createCustomer($scope.newCustomer, function(data) {
            if (data.errors) {
                console.log(data.errors);
                $scope.errors = data.errors;
            } else {
                $location.url('/');
            }
        })
    }
});

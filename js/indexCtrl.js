(function () {
    'use strict';

    angular
        .module("MyApp.core")
        .controller('indexCtrl', indexCtrl);

    indexCtrl.$inject = ["$scope"];

    function indexCtrl($scope) {
        $scope.employees = [];
        $scope.employee = {
            Id: null,
            Name: ""
        };
        $scope.getEmployees = function () {
            $scope.employees = [
                {
                    Id: 1,
                    Name: "Rahul"
                },
                {
                    Id: 2,
                    Name: "Sudan"
                },
                {
                    Id: 3,
                    Name: "Mayank"
                },
                {
                    Id: 4,
                    Name: "Arunraj"
                }];
        };
    }
})();



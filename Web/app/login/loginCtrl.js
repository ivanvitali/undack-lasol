'use strict';

angular.module('Login').controller('loginCtrl', ['$scope', '$state', 'authenticationService',
    function ($scope, $state, authenticationService) {

        $scope.initController = function() {
            authenticationService.clearCredentials();
            $scope.loginFailed = false;
        };

        $scope.login = function() {
            $scope.dataLoading = true;
            $scope.loginFailed = false;
            authenticationService.login($scope.email, $scope.password, onLogin, onErrorLogin);
        };

        var onLogin = function(){
            authenticationService.setCredentials($scope.email, $scope.password);
            $state.go('home');
            $scope.$apply();
        };

        var onErrorLogin = function(error) {
            console.log(error.code);
            console.log(error.message);
            $scope.dataLoading = false;
            $scope.loginFailed = true;
            $scope.$apply();
        };
    }
]);
angular.module('Login', ['Core', 'Layout'])
    .config(function($stateProvider) {
        $stateProvider
            .state('auth', {
                url: '/auth',
                template: '<ui-view/>',
                abstract: true
            })
            .state('auth.login', {
                url: "/login",
                templateUrl: 'login/index.html'
            })
            .state('auth.logout', {
                url: '/logout',
                controller: ['authenticationService', '$state',
                    function(authenticationService, $state) {
                        authenticationService.logout();
                        $state.go('auth.login');
                    }]
            })
    });

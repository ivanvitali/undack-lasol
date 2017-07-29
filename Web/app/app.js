(function() {
    'use strict';

    angular.module('UndackApp', ['Core', 'News', 'Layout', 'Login'])
    .config(function($urlRouterProvider){
      $urlRouterProvider.otherwise('/');
    })
    .run(['$rootScope', '$state', '$stateParams',
        function ($rootScope, $state, $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }
    ]);
})();

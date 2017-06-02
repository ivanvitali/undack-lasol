(function() {
    'use strict';

    angular.module('UndackApp', ['Core', 'News', 'Layout']).run(['$rootScope', '$state', '$stateParams',
        function ($rootScope, $state, $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
            $state.go('news.show');
        }
    ]);
})();
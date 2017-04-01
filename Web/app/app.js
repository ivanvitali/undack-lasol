'use strict';

angular.module('UndackApp', ['Base', 'Novedades', 'Layout']).run(['$rootScope', '$state', '$stateParams',
        function($rootScope, $state, $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
            $state.go('novedades.index');
        }
    ]);
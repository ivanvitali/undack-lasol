'use strict';

angular.module('Novedades')
    .controller('novedades.index', ['$scope', 'novedadesService',
        function ($scope, novedadesService) {
            $scope.setup = function()
            {
                console.log('Setup novedades');
                $scope.novedades = novedadesService.obtenerNovedades();
            }

            $scope.setup();
        }
    ]);
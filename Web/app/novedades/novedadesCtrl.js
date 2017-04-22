'use strict';

angular.module('Novedades')
    .controller('novedades.index', ['$scope', 'novedadesService',
        function ($scope, novedadesService) {
            $scope.setup = function()
            {
                $scope.novedades = novedadesService.obtenerNovedades();
                $scope.novedadSeleccionada = novedadesService.obtenerNovedadDestacada();
            }

            $scope.novedadNoExpirada = function(novedad){
                return novedad.fechaExpiracion >= new Date().getTime();
            }

            $scope.selecionarNovedad = function(novedad)
            {
                $scope.novedadSeleccionada = novedad;
            }

            $scope.setup();
        }
    ]);
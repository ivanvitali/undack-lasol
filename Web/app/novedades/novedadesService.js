'use strict';

angular.module('Novedades').factory('novedadesService', ['dataService',
    function (dataService) {
        return {
            obtenerNovedades: function() {
                var novedades = dataService.getData('novedades');
                return novedades;
            },
            obtenerNovedadDestacada: function ()
            {
                return dataService.getData('novedades/novedad1');
            }
        };
    }
]);

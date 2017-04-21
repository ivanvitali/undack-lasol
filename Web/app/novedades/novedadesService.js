'use strict';

angular.module('Novedades').factory('novedadesService', ['dataService',
    function (dataService) {
        return {
            obtenerNovedades: function() {
                return dataService.getData('novedades');
            },
            obtenerNovedadDestacada: function ()
            {
                return dataService.getData('novedades/novedad1');
            }
        };
    }
]);

'use strict';

angular.module('Novedades', ['Base']).config(function($stateProvider) {
    $stateProvider
    .state('novedades', {
        url: "/novedades",
        abstract: true,
        template: "<ui-view />"
    })
    .state('novedades.index', {
        url: "/",
        templateUrl: "novedades/index.html",
        controller: "novedades.index"
    })
});

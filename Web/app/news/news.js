'use strict';

angular.module('News', ['Core']).config(function($stateProvider) {
    $stateProvider
    .state('news', {
        url: "/novedades",
        abstract: true,
        template: "<ui-view />"
    })
    .state('news.show', {
        url: "/",
        templateUrl: "news/show.html",
        controller: "news.show"
    })
    .state('news.index', {
        url: "/index",
        templateUrl: "news/index.html",
        controller: "news.index"
    })
    .state('news.create', {
        url: "/{type}/create",
        templateUrl: "news/edit.html",
        controller: "news.edit"
    })
    .state('news.edit', {
        url: "/edit/{id}",
        templateUrl: "news/edit.html",
        controller: 'news.edit'
    })
});
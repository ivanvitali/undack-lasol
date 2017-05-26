'use strict';

angular.module('News').factory('newsService', ['coreService',
    function (dataService) {
        return {
            getNews: function() {
                var news = dataService.getData('novedades');
                return news;
            },
            getTopNew: function ()
            {
                return dataService.getData('novedades/novedad1');
            }
        };
    }
]);

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
            },
            saveNew: function(aNew, onSaved)
            {
                aNew.$save().then(onSaved);
            },
            getNewForEdit: function(){
                return dataService.getNewObject('novedades');
            }
        };
    }
]);

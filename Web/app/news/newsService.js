'use strict';

angular.module('News').factory('newsService', ['coreService',
    function (dataService) {
        return {
            getNews: function(onNewsLoaded) {
                var news = dataService.getData('novedades', onNewsLoaded);
                return news;
            },
            getNew: function(id)
            {
              return dataService.getData('novedades/'+id);
            },
            getTopNew: function (onTopNewLoaded)
            {
                return dataService.getData('novedades/top', onTopNewLoaded);
            },
            saveNew: function(aNew, onSaved)
            {
                aNew.$save().then(onSaved);
            },
            getNewForEdit: function(){
                return dataService.getNewObject('novedades');
            },
            delete: function (aNew) {
                dataService.delete('novedades',aNew);
            },
            setTop: function (topNew, onSaved) {
                topNew.$save().then(onSaved);
            }
        };
    }
]);

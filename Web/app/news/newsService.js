'use strict';

angular.module('News').factory('newsService', ['coreService',
    function (dataService) {
        return {
            getNews: function(onNewsLoaded) {
                var news = dataService.getData('news', onNewsLoaded);
                return news;
            },
            getNew: function(id, onLoaded)
            {
              return dataService.getData('news/'+id, onLoaded);
            },
            getTopNew: function (onTopNewLoaded)
            {
                return dataService.getData('topNew', onTopNewLoaded);
            },
            saveNew: function(aNew, onSaved)
            {
                dataService.saveObject(aNew, onSaved);
            },
            getNewForEdit: function(){
                return dataService.getNewObject('news');
            },
            delete: function (aNew) {
                dataService.deleteObject('news', aNew);
            },
            setTop: function (topNew, onSaved) {
                topNew.$save().then(onSaved);
            }
        };
    }
]);

'use strict';

angular.module('News')
    .controller('news.show', ['$scope', 'newsService',
        function ($scope, newsService) {
            $scope.setup = function()
            {
                $scope.news = newsService.getNews(loadTopNew);
            }

            $scope.notExpired = function(aNew){
                return aNew.fechaExpiracion >= new Date().getTime();
            }

            $scope.selectNew = function(aNew)
            {
                $scope.selectedNew = aNew;
            }
            
            var onTopNewLoaded = function(topNew){
                $scope.selectedNew = $scope.news[topNew.id];
            }
            
            var loadTopNew = function(){
                newsService.getTopNew(onTopNewLoaded);
            }

            $scope.setup();
        }
    ]);
angular.module('News').controller('news.index', ['$scope', 'newsService',
    function ($scope, newsService) {
        $scope.setup = function()
        {
            $scope.news = newsService.getNews();
            $scope.topNew = newsService.getTopNew();
        }

        $scope.delete = function(aNew)
        {
            newsService.delete(aNew);
        }

        $scope.setAsTop = function(aNew)
        {
            $scope.topNew.id = aNew.id;
            newsService.setTop($scope.topNew);
        }

        $scope.setup();
    }
]);
angular.module('News').controller('news.edit', ['$scope', '$stateParams', 'newsService',
    function ($scope, $stateParams, newsService) {
        $scope.setup=function(){
            if(isCreating()){
                $scope.newEditing=newsService.getNewForEdit();
            }
            else{
                $scope.newEditing=newsService.getNew($stateParams.id);
            }
            $scope.newSaved=false;
        }
        $scope.save=function(){
            $scope.newEditing.creationDate=new Date().getTime();
            newsService.saveNew($scope.newEditing, onSaved);
        }
        var onSaved=function(newSaved){
            $scope.newSaved=true;
        }

        var isCreating=function () {
            return $stateParams.id == undefined;
        }
        $scope.setup();
    }
]);
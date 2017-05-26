'use strict';

angular.module('News')
    .controller('news.index', ['$scope', 'newsService',
        function ($scope, newsService) {
            $scope.setup = function()
            {
                $scope.news = newsService.getNews();
                $scope.selectedNew = newsService.getTopNew();
            }

            $scope.notExpired = function(aNew){
                return aNew.fechaExpiracion >= new Date().getTime();
            }

            $scope.selectNew = function(aNew)
            {
                $scope.selectedNew = aNew;
            }

            $scope.setup();
        }
    ]);
angular.module('News')
    .controller('news.edit', ['$scope', 'newsService',
        function ($scope, newsService) {
            $scope.setup=function(){
                $scope.newEditing=newsService.getNewForEdit();
                $scope.newSaved=false;
            }
            $scope.save=function(){
                $scope.newEditing.creationDate=new Date().getTime();
                newsService.saveNew($scope.newEditing, onSaved);
            }
            var onSaved=function(newSaved){
                $scope.newSaved=true;
            }
            $scope.setup();
        }
    ]);
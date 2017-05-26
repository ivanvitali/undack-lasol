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
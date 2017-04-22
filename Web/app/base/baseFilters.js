'use strict';

angular.module('Base').filter('toArray', function() {
    return function(obj) {
        var result = [];
        angular.forEach(obj, function(val) {
            result.push(val);
        });
        return result;
    };
});
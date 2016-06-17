(function(selectTwoModule){
    'use strict';

    selectTwoModule.directive('selectTwo', function($timeout){
       return {
           restrict: 'A',
           link: function(scope, element, attrs){
               $timeout(function(){
                   $(element).select2();
               });
           }
       }
    });
}(angular.module('SelectTwoModule')));
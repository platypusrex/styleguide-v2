(function(navModule){
    'use strict';

    navModule.directive('navDirective', function(){
        return {
            restrict: 'E',
            templateUrl: 'app/shared/nav/templates/nav.html'
        }
    });
}(angular.module('NavModule')));
(function(navModule){
    'use strict';

    navModule.directive('navDirective', function(){
        return {
            restrict: 'E',
            templateUrl: '../static/styleguide-v2/app/shared/nav/templates/nav.html'
        }
    });
}(angular.module('NavModule')));
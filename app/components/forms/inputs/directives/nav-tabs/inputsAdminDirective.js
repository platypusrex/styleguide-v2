(function(inputsModule){
    'use strict';
    
    inputsModule.directive('inputsAdmin', function(){
        return {
            restrict: 'A',
            templateUrl: '../static/styleguide-v2/app/components/forms/inputs/templates/nav-tabs/inputsAdmin.html'
        }
    })
}(angular.module('InputsModule')));
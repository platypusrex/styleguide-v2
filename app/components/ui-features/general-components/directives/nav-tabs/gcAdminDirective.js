(function(generalComponentsModule){
    'use strict';
    
    generalComponentsModule.directive('generalComponentsAdmin', function(){
        return {
            restrict: 'A',
            templateUrl: '../static/styleguide-v2/app/components/ui-features/general-components/templates/nav-tabs/generalComponentsAdmin.html'
        }   
    });
}(angular.module('GeneralComponentsModule')));
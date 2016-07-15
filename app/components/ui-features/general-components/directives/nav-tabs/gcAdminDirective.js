(function(generalComponentsModule){
    'use strict';
    
    generalComponentsModule.directive('generalComponentsAdmin', function(){
        return {
            restrict: 'A',
            templateUrl: 'app/components/ui-features/general-components/templates/nav-tabs/generalComponentsAdmin.html'
        }   
    });
}(angular.module('GeneralComponentsModule')));
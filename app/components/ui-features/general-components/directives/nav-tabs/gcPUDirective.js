(function(generalComponentsModule){
    'use strict';

    generalComponentsModule.directive('generalComponentsPu', function(){
        return {
            restrict: 'A',
            templateUrl: 'app/components/ui-features/general-components/templates/nav-tabs/generalComponentsPU.html'
        }
    });
}(angular.module('GeneralComponentsModule')));
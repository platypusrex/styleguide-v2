(function(generalComponentsModule){
    'use strict';

    generalComponentsModule.controller('generalComponentsCtrl', [
        '$scope',
        'generalComponentsService',
        function($scope, generalComponentsService){
            $scope.tab = 1;
            
            $scope.updateTabId = function(val){
                $scope.tab = val;  
            };
            
            $scope.components = generalComponentsService.getComponents();
    }]);
}(angular.module('GeneralComponentsModule')));
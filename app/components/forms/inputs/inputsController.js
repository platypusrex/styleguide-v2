(function(inputsModule){
    'use strict';
    
    inputsModule.controller('inputsCtrl', [
        '$scope',
        'inputsService',
        function($scope, inputsService){
            $scope.tab = 1;
            
            $scope.updateTabId = function(val){
                $scope.tab = val;
            };
            
            $scope.components = inputsService.getComponents();
        }
    ]);
}(angular.module('InputsModule')));
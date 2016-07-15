(function(sgPanelModule){
    'use strict';
    
    sgPanelModule.directive('sgNavPills', [function(){
        return {
            restrict: 'E',
            templateUrl: 'app/shared/sg-panel/templates/sgNavPills.html',
            controller: function($scope){
                $scope.tab = 1;

                $scope.setTab = function(tabId){
                    $scope.tab = tabId;
                };

                $scope.isSet = function(tabId){
                    return $scope.tab === tabId;
                };
            }
        }
    }]);
}(angular.module('SgPanelModule')));
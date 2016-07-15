(function(sgNavTabs){
    'use strict';
    
    sgNavTabs.directive('sgNavTabs', function(){
        return {
            restrict: 'E',
            templateUrl: 'app/shared/sg-nav-tabs/templates/sgNavTabs.html',
            scope: {
                setTabId: '&method'
            },
            controller: function($scope){
                $scope.tab = 1;
                
                $scope.setTab = function(tabId){
                    $scope.tab = tabId;
                    $scope.setTabId({val: tabId});
                };
                
                $scope.isSet = function(tabId){
                    return $scope.tab === tabId;
                };
            }
        }
    });
}(angular.module('SgNavTabsModule')));
(function(sgPanelModule){
    'use strict';
    
    sgPanelModule.directive('sgPanel', ['$sanitize', '$sce',function($sanitize, $sce){
        return {
            restrict: 'E',
            templateUrl: '../static/styleguide-v2/app/shared/sg-panel/templates/sgPanel.html',
            scope: {
                component: '='
            },
            controller: function($scope){
                $scope.collapsed = true;
                
                $scope.collapse = function(){
                    $scope.collapsed = !$scope.collapsed;   
                };
                
                $scope.toTrusted = function(htmlCode){
                    return $sce.trustAsHtml(htmlCode);
                };
            }
        }
    }]);
}(angular.module('SgPanelModule')));
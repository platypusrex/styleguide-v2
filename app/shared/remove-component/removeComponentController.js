(function(removeComponentModule){
    'use strict';

    removeComponentModule.controller('removeComponentCtrl', [
        '$scope',
        '$element',
        'component',
        'components',
        function($scope, $element, component, components){
            $scope.close = function(result) {
                close(result, 500);
            };

            $scope.removeComponent = function(){
                components.$remove(component);
                closeModal();
            };

            var closeModal = function(){
                $element.modal('hide');
            };
        }
    ]);
}(angular.module('RemoveComponentModule')));
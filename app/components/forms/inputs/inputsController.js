(function(inputsModule){
    'use strict';
    
    inputsModule.controller('inputsCtrl', [
        '$scope',
        'inputsService',
        'ModalService',
        function($scope, inputsService, ModalService){
            $scope.tab = 1;
            
            $scope.updateTabId = function(val){
                $scope.tab = val;
            };
            
            $scope.components = inputsService.getComponents();

            $scope.editComponent = function(component){
                ModalService.showModal({
                    templateUrl: '../static/styleguide-v2/app/shared/edit-component/templates/editComponent.html',
                    controller: 'editComponentCtrl',
                    inputs: {
                        component: component,
                        children: {
                            type: 'form_elements',
                            group: 'inputs'
                        }
                    }
                }).then(function(modal){
                    modal.element.modal();
                    modal.close.then(function(result){
                        console.log('i done wit da edit');
                    })
                });
            };

            $scope.removeComponent = function(component){
                ModalService.showModal({
                    templateUrl: '../static/styleguide-v2/app/shared/remove-component/templates/removeComponent.html',
                    controller: 'removeComponentCtrl',
                    inputs: {
                        component: component,
                        components: $scope.components
                    }
                }).then(function(modal){
                    modal.element.modal();
                    modal.close.then(function(result){
                        console.log('i done wit da edit');
                    })
                });
            };
        }
    ]);
}(angular.module('InputsModule')));
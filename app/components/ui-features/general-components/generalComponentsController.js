(function(generalComponentsModule){
    'use strict';

    generalComponentsModule.controller('generalComponentsCtrl', [
        '$scope',
        'generalComponentsService',
        'ModalService',
        function($scope, generalComponentsService, ModalService){
            $scope.tab = 1;
            
            $scope.updateTabId = function(val){
                $scope.tab = val;  
            };
            
            $scope.components = generalComponentsService.getComponents();
            
            $scope.editComponent = function(component){
                ModalService.showModal({
                    templateUrl: 'app/shared/edit-component/templates/editComponent.html',
                    controller: 'editComponentCtrl',
                    inputs: {
                        component: component,
                        children: {
                            type: 'ui_features',
                            group: 'general_components'
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
                    templateUrl: 'app/shared/remove-component/templates/removeComponent.html',
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
}(angular.module('GeneralComponentsModule')));
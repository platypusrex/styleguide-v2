(function(sidenavModule){
    'use strict';

    sidenavModule.controller('sidenavCtrl', [
        '$scope',
        'ModalService',
        function($scope, ModalService){
            $scope.addComponent = function(){
                ModalService.showModal({
                    templateUrl: 'app/components/add-new/elements-and-components/templates/addNew.html',
                    controller: 'addNewCtrl',
                }).then(function(modal){
                    modal.element.modal();
                    modal.close.then(function(result){
                        console.log('i done wit da edit');
                    })
                });
            };
        }
    ]);
}(angular.module('SidenavModule')));
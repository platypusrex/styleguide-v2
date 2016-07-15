(function(addNewModule){
    'use strict';
    
    addNewModule.controller('addNewCtrl', [
        '$scope',
        'firebaseDataService',
        '$sanitize',
        '$sce',
        '$element',
        function($scope, firebaseDataService, $sanitize, $sce, $element){
            var baseRef = firebaseDataService.root;
            $scope.submitted = false;
            $scope.type = [
                {
                    id: 1,
                    value: 'ui_features'
                },
                {
                    id: 2,
                    value: 'components'
                },
                {
                    id: 3,
                    value: 'form_elements'
                }
            ];
            $scope.group = null;
            
            $scope.checkSelectType = function(val){
                if(val){
                    if(val.id === 1){
                        $scope.group = [
                            'general_components',
                            'buttons',
                            'popover_confirmations',
                            'icons',
                            'typography',
                            'tabs_and_navs',
                            'accordions',
                            'timeline',
                            'tree_view',
                            'progress_bar',
                            'block_ui',
                            'growl_notifications'
                        ];
                    } else if(val.id === 2) {
                        $scope.group = [
                            'test'
                        ]
                    } else {
                        $scope.group = [
                            'inputs'
                        ]
                    }
                }
            };

            String.prototype.replaceAll = function(target, replacement) {
                return this.split(target).join(replacement);
            };

            String.prototype.capitalizeFirstLetter = function() {
                return this.charAt(0).toUpperCase() + this.slice(1);
            };

            $scope.toTrusted = function(htmlCode){
                return $sce.trustAsHtml(htmlCode);
            };

            $scope.saveContent = function(data){
                $scope.submitted = true;
                var validate = validateForm(data);

                if(validate){
                    var dataObj = {
                        type: data.type.value,
                        group: data.group,
                        element: data.element,
                        html: data.html
                    };

                    saveComponent(dataObj);
                }
            };

            var validateForm = function(data){
                if(data){
                    return (data.type && data.group && data.element);
                }else {
                    return false;
                }
            };

            var formatHtml = function(str){
                return str.replaceAll('<', '&lt;').replaceAll('>', '&gt;').replace(/(?:\r\n|\r|\n)/g, '<br>&nbsp;&nbsp;').replace(' ', '&nbsp;');
            };

            var formatCss = function(str){

            };

            var formatJs = function(str){

            };

            var saveComponent = function(data){
                baseRef.child(data.type).child(data.group).child(data.element).update({
                    title: data.element.capitalizeFirstLetter().replaceAll('_', ' '),
                    code: {
                        html: data.html
                    }
                }, clearForm());
            };

            var clearForm = function(){
                $scope.submitted = false;
                $scope.element = {};
                $scope.updateForm.$setPristine();
                $scope.updateForm.$setUntouched();

                closeModal();
            };

            var closeModal = function(){
                $element.modal('hide');
            };
        }
    ]);
}(angular.module('AddNewModule')));
(function(editComponentModule){
    'use strict';
    
    editComponentModule.controller('editComponentCtrl', [
        '$scope',
        '$element',
        'component',
        'children',
        'firebaseDataService',
        function($scope, $element, component, children, firebaseDataService){
            var baseRef = firebaseDataService.root;
            $scope.submitted = false;
            $scope.element = {
                html: (component.code.html) ? component.code.html : '',
                css: (component.code.css) ? component.code.css : '',
                js: (component.code.js) ? component.code.js : ''
            };

            $scope.updateComponent = function(data){
                $scope.submitted = true;

                var dataObj = {
                    html: data.html,
                    css: data.css,
                    js: data.js
                };

                saveComponent(dataObj);
            };

            var saveComponent = function(data){
                baseRef.child(children.type).child(children.group).child(component.$id).update({
                    code: {
                        html: (data.html) ? data.html : '',
                        css: (data.css) ? data.css : '',
                        js: (data.js) ? data.js : ''
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
}(angular.module('EditComponentModule')));
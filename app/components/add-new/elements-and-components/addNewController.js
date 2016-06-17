(function(addNewModule){
    'use strict';
    
    addNewModule.controller('addNewCtrl', [
        '$scope',
        'firebaseDataService',
        '$sanitize',
        '$sce',
        function($scope, firebaseDataService, $sanitize, $sce){
            $scope.submitted = false;
            var baseRef = firebaseDataService.root;

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
                        type: data.type,
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
            };
        }
    ]);
}(angular.module('AddNewModule')));
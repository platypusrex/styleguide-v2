(function(inputsModule){
    'use strict';
    
    inputsModule.factory('inputsService', [
        '$firebaseObject',
        '$firebaseArray',
        'firebaseDataService',
        function($firebaseObject, $firebaseArray, firebaseDataService){
            var getComponents = function(){
                var components = firebaseDataService.form_elements.child('inputs');
                return $firebaseArray(components);
            };
            
            return {
                getComponents: getComponents
            }
        }
    ]);
}(angular.module('InputsModule')));
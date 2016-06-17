(function(generalComponentsModule){
    'use strict';

    generalComponentsModule.factory('generalComponentsService', [
        '$firebaseObject',
        '$firebaseArray',
        'firebaseDataService',
        function($firebaseObject, $firebaseArray, firebaseDataService){
            var getComponents = function(){
                var components = firebaseDataService.ui_features.child('general_components');
                return $firebaseArray(components);
            };

            return {
                getComponents: getComponents
            }
    }]);
}(angular.module('GeneralComponentsModule')));
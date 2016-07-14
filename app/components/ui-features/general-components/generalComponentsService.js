(function(generalComponentsModule){
    'use strict';

    generalComponentsModule.factory('generalComponentsService', [
        '$firebaseArray',
        'firebaseDataService',
        function($firebaseArray, firebaseDataService){
            var getComponents = function(){
                var components = firebaseDataService.ui_features.child('general_components');
                return $firebaseArray(components);
            };

            return {
                getComponents: getComponents
            }
    }]);
}(angular.module('GeneralComponentsModule')));
(function(coreModule){
    'use strict';

    coreModule.factory('firebaseDataService', ['FIREBASE_URL', function(FIREBASE_URL){
        var root = new Firebase(FIREBASE_URL);

        return {
            root: root,
            ui_features: root.child('ui_features'),
            form_elements: root.child('form_elements')
        }
    }])
}(angular.module('CoreModule')));
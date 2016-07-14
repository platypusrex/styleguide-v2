(function(){
    'use strict';

    angular.module('StyleGuideApp', [
            'ui.router',
            'ngAnimate',
            'ngSanitize',
            'ngResource',
            'firebase',
            'CoreModule',
            'NavModule',
            'DashboardModule',
            'SidenavModule',
            'ContentModule',
            'GeneralComponentsModule',
            'ButtonsModule',
            'PopoverConfirmationsModule',
            'IconsModule',
            'TypographyModule',
            'TabsAndNavsModule',
            'AccordionsModule',
            'TimelineModule',
            'TreeViewModule',
            'ProgressBarModule',
            'BlockUIModule',
            'GrowlNotificationsModule',
            'InputsModule',
            'AddNewModule',
            'ModalModule',
            'RemoveComponentModule',
            'EditComponentModule'
        ])
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise('/dashboard');
        }])
        .run(['$rootScope', '$state', '$log', function($rootScope, $state, $log){
            $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error){
                $log.error('An error occurred during state change: ', error);

                $log.debug('event: ', event);
                $log.debug('toState: ', toState);
                $log.debug('toParams: ', toParams);
                $log.debug('fromState: ', fromState);
                $log.debug('fromParams: ', fromParams);
                $log.debug('error: ', error);
            });

            $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
                $log.debug('State change successful');

                $log.debug('event: ', event);
                $log.debug('toState: ', toState);
                $log.debug('toParams: ', toParams);
                $log.debug('fromState: ', fromState);
                $log.debug('fromParams: ', fromParams);
            });

            $rootScope.$on('$stateNotFound', function(event, unfoundState, fromState, fromParams){
                $log.error('State not found: ', unfoundState);
            });
        }]);
}());
(function(){
    'use strict';

    angular.module('DashboardModule', [])
        .config(['$stateProvider', function($stateProvider){
            $stateProvider
                .state('dashboard', {
                    url: '/dashboard',
                    views: {
                        '': {
                            templateUrl: '../static/styleguide-v2/app/components/dashboard/dashboard.html'
                        },
                        'sidenav@dashboard': {
                            templateUrl: '../static/styleguide-v2/app/shared/sidenav/sidenav.html'
                        },
                        'content@dashboard': {
                            templateUrl: '../static/styleguide-v2/app/shared/content/content.html'
                        }
                    }
                })
                .state('dashboard.general-components', {
	                url: '/general-components',
	                views: {
		                'general-components': {
			                templateUrl: '../static/styleguide-v2/app/components/ui-features/general-components/templates/generalComponents.html',
                            controller: 'generalComponentsCtrl'
		                }
		            }
		        })
                .state('dashboard.buttons', {
                    url: '/buttons',
                    views: {
                        'buttons': {
                            templateUrl: '../static/styleguide-v2/app/components/ui-features/buttons/templates/buttons.html',
                            controller: 'buttonsCtrl'
                        }
                    }
                })
                .state('dashboard.popover-confirmations', {
                    url: '/popover-confirmations',
                    views: {
                        'popover-confirmations': {
                            templateUrl: '../static/styleguide-v2/app/components/ui-features/popover-confirmations/popoverConfirmations.html',
                            controller: 'popoverConfirmationsCtrl'
                        }
                    }
                })
                .state('dashboard.icons', {
                    url: '/icons',
                    views: {
                        'icons': {
                            templateUrl: '../static/styleguide-v2/app/components/ui-features/icons/templates/icons.html',
                            controller: 'iconsCtrl'
                        }
                    }
                })
                .state('dashboard.typography', {
                    url: '/typography',
                    views: {
                        'typography': {
                            templateUrl: '../static/styleguide-v2/app/components/ui-features/typography/templates/typography.html',
                            controller: 'typographyCtrl'
                        }
                    }
                })
                .state('dashboard.tabs-and-navs', {
                    url: '/tabs-and-navs',
                    views: {
                        'tabs-and-navs': {
                            templateUrl: '../static/styleguide-v2/app/components/ui-features/tabs-and-navs/templates/tabsAndNavs.html',
                            controller: 'tabsAndNavsCtrl'
                        }
                    }
                })
                .state('dashboard.accordions', {
                    url: '/accordions',
                    views: {
                        'accordions': {
                            templateUrl: '../static/styleguide-v2/app/components/ui-features/accordions/templates/accordions.html',
                            controller: 'accordionsCtrl'
                        }
                    }
                })
                .state('dashboard.timeline', {
                    url: '/timeline',
                    views: {
                        'timeline': {
                            templateUrl: '../static/styleguide-v2/app/components/ui-features/timeline/templates/timeline.html',
                            controller: 'timelineCtrl'
                        }
                    }
                })
                .state('dashboard.tree-view', {
                    url: '/tree-view',
                    views: {
                        'tree-view': {
                            templateUrl: '../static/styleguide-v2/app/components/ui-features/tree-view/templates/treeView.html',
                            controller: 'treeViewCtrl'
                        }
                    }
                })
                .state('dashboard.progress-bar', {
                    url: '/progress-bar',
                    views: {
                        'progress-bar': {
                            templateUrl: '../static/styleguide-v2/app/components/ui-features/progress-bar/templates/progressBar.html',
                            controller: 'progressBarCtrl'
                        }
                    }
                })
                .state('dashboard.block-ui', {
                    url: '/block-ui',
                    views: {
                        'block-ui': {
                            templateUrl: '../static/styleguide-v2/app/components/ui-features/block-ui/templates/blockUI.html',
                            controller: 'blockUICtrl'
                        }
                    }
                })
                .state('dashboard.growl-notifications', {
                    url: '/growl-notifications',
                    views: {
                        'growl-notifications': {
                            templateUrl: '../static/styleguide-v2/app/components/ui-features/growl-notifications/templates/growlNotifications.html',
                            controller: 'growlNotificationsCtrl'
                        }
                    }
                })
                .state('dashboard.inputs', {
                    url: '/inputs',
                    views: {
                        'inputs': {
                            templateUrl: '../static/styleguide-v2/app/components/forms/inputs/templates/inputs.html',
                            controller: 'inputsCtrl'
                        }
                    }
                })
                .state('dashboard.add-new', {
                    url: '/add-new',
                    views: {
                        'add-new': {
                            templateUrl: '../static/styleguide-v2/app/components/add-new/elements-and-components/templates/addNew.html',
                            controller: 'addNewCtrl'
                        }
                    }
                });
        }])
}());
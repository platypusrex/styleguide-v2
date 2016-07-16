(function(sidenavModule){
    'use strict';

    sidenavModule.directive('chevronIcon', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs){
                $(element).on('click', function(){
                    if(!$(this).hasClass('animate')){
                        $(this).addClass('animate');
                    } else {
                        $(this).removeClass('animate');
                    }
                });
            }
        }
    });
}(angular.module('SidenavModule')));
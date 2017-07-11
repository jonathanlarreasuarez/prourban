'use strict';

angular.module('ProUrban')
.directive('menu', ['$rootScope',
	function($rootScope) {
		return {
			restrict: 'A',
			template: '<div ng-include="\'app/views/components/menu.html\'"/>'
		}
	}
]);
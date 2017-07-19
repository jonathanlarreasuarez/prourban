'use strict';

angular.module('ProUrban')
.directive('stats', ['$rootScope',
	function($rootScope) {
		return {
			restrict: 'A',
			template: '<div ng-include="\'app/views/components/stats.html\'"/>'
		}
	}
]);
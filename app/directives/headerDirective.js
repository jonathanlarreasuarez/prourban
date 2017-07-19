'use strict';

angular.module('ProUrban')
.directive('header', ['$rootScope',
	function($rootScope) {
		return {
			restrict: 'A',
			template: '<div ng-include="\'app/views/components/header.html\'"/>'
		}
	}
]);
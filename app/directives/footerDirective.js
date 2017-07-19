'use strict';

angular.module('ProUrban')
.directive('footer', ['$rootScope',
	function($rootScope) {
		return {
			restrict: 'A',
			template: '<div ng-include="\'app/views/components/footer.html\'"/>'
		}
	}
]);
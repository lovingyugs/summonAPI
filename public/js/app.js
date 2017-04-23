(function() {
	'use strict';
	
	angular.module('app', ['ngMaterial', 'ngRoute', 'ngCookies', 'ngMdIcons', 'appRoutes', 'sideNavCtrl', 'homeCtrl', 'aboutCtrl', 'teamCtrl',
 	'contactCtrl', 'hiddensideNavCtrl', 'createAccountCtrl', 'loginCtrl', 'allDirectives', 'allServices'])

		.config(['$mdThemingProvider', function($mdThemingProvider) {
				$mdThemingProvider.theme('default')
				.primaryPalette('indigo')
				.accentPalette('orange');
		}]);
})();
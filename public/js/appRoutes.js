angular.module('appRoutes', [])


.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		.when('/home', {
			templateUrl: '../views/home.html',
			controller: 'homeCtrl'
		})
		.when('/details/:id', {
			templateUrl: '../views/post-details.html',
			controller: 'postDetailCtrl'
		})
		.when('/about', {
			templateUrl: '../views/about.html',
			controller: 'aboutCtrl'
		})
		.when('/contact_us', {
			templateUrl: '../views/contact_us.html',
			controller: 'contactCtrl'
		})
		.when('/team', {
			templateUrl: '../views/team.html',
			controller: 'teamCtrl'
		})
		.when('/create-account', {
			templateUrl: '../views/create-account.html',
			controller: 'createAccountCtrl'
		})
		.when('/login-account', {
			templateUrl: '../views/login-account.html',
			controller: 'loginCtrl'
		})
		.when('/add_post', {
			templateUrl: '../views/add-post.html',
			controller: 'addPostCtrl'
		})
		.otherwise({
          redirectTo:'/home'
		});

	$locationProvider.html5Mode(true);
	}
]);

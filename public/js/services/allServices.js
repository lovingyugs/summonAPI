angular.module('allServices', [])
	

	.factory('signupService', ['$http', function($http) {
		return {
			userSignup : function(data) {
				var config = {
					 headers : {
					 	// 'Content-Type': 'json/x-www-form-urlencoded;charset=utf-8;'
					 }
				}
				return $http.post("/api/signup", data, config);
			}
		}
	}])

	.factory('signinService', ['$http', function($http) {
		return {
			userSignin : function(data) {
				var config = {
					 headers : {
					 	// 'Content-Type': 'json/x-www-form-urlencoded;charset=utf-8;'
					 }
				}
				return $http.post("/api/signin", data, config);
			}
		}
	}])

	.factory('userDataService', ['$http', function($http) {
		return {
			getData : function() {
				var config = {
					 headers : {
					 	// 'Content-Type': 'json/x-www-form-urlencoded;charset=utf-8;'
					 }
				}
				return $http.get("/api/me");
			}
		}
	}])	

	.factory('voteService', ['$http', function($http) {
		return {
			getVote : function(data) {
				var config = {
					 headers : {
					 	'Content-Type': 'application/json;'
					 }
				}
				return $http.post('/api/editvote', data);
			}
		}
	}])

	.factory('postDetailService', ['$http', '$routeParams', function($http, $routeParams) {
		return {
			getPostDetails : function(routeParams) {
				console.log(routeParams);
				var config = {
					headers : {
						'Content-Type' : 'application/json;'
					}
				}
				return $http.get('/api/details', {
					params : {
						postId : routeParams.id
					}
				})
			}
		}
	}])

	.factory('addPostService', ['$http', function($http) {
		return {
			addPostDetails : function(data) {
				console.log(data);
				var config = {
					headers : {
						'Content-Type' : 'application/json;'
					}
				}
				console.log($http.post('/api/addPost', data));
				return $http.post('/api/addPost', data);
			}
		}
	}])
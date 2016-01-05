(function() {
	//Strict mode
	'use strict';

	//Lead, Define a global entry
	window.ApplicationConfiguration = (function() {
		//Init module configuration options
		var applicationModuleName = 'manageApp';
		var applicationModuleVendorDependencies = ['ui.router', 'ngResource'];

		//Add a new vertical module
		var registerModule = function(moduleName) {
			//Create angular module
			angular.module(moduleName, []);

			//Add the module to the AngularJS configuration file
			angular.module(applicationModuleName).requires.push(moduleName);
		};

		return {
			applicationModuleName: applicationModuleName,
			applicationModuleVendorDependencies: applicationModuleVendorDependencies,
			registerModule: registerModule
		}
	})();

	var manageApp = angular.module('manageApp', ['ui.router', 'ngResource']);
	manageApp.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', '$locationProvider',
		function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
			//config the header for http
			$httpProvider.defaults.useXDomain = true; //???????????????????angularjs CORS?????????
			$httpProvider.defaults.withCredentials = true; //???????????Ajax??Cookie?????(???????????CORS???????????????cookie)
			delete $httpProvider.defaults.headers.common['X-Requested-With'];
			$httpProvider.defaults.headers['Cache-Control'] = 'no-cache';
			$httpProvider.defaults.headers['Pragma'] = 'no-cache';
			$httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded';
			$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
			$httpProvider.defaults.headers['If-Modified-Since'] = '0';

			//Prohibit the cache
			$httpProvider.defaults.cache = false;

			//config rooter
			$stateProvider
				.state('index', {
					url: '/index',
					views: {
						'content@': {
							templateUrl: 'app/html/home/views/home.html',
							controller:'indexController'
						}
					}
				}).state('a', {
					url: '/a',
					views: {
						'content@': {
							templateUrl: 'app/html/home/views/pageA.html'
						}
					}
				});

			$urlRouterProvider.otherwise('/index');
		}
	]).controller("indexController", ['$scope', function($scope) {
		$scope.message = "IndexController";
	}])
	$(".nav-list li a").on('click', function() {
		$(".nav-list li").removeClass('active');
		$(this).parent().addClass('active');
	});
})();
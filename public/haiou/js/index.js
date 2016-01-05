var mainApp = angular.module("mainApp", [ 'ngRoute' ]);

mainApp.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/alpha', {
		templateUrl : './pages/a.html',
		controller : 'AddStudentController'
	}).when('/beta', {
		templateUrl : './pages/b.html',
		controller : 'ViewStudentsController'
	}).when('/cigema', {
		templateUrl : './pages/c.html',
		controller : 'StudentsController'
	}).otherwise({
		redirectTo : '/alpha'
	});
} ]);

 mainApp.controller('AddStudentController', function($scope) {
    $scope.message = "A 页面 by ng";
});

mainApp.controller('ViewStudentsController', function($scope) {
    $scope.message = "B 页面 by ng";
});
mainApp.controller('StudentsController', function($scope) {
    $scope.message = "C 页面 by ng";
});

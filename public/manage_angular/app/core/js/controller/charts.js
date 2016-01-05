var manageAppCharts = angular.module("manageApp.charts",['ui.route']);
manageApp.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', '$locationProvider',
    function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
        $stateProvider.state('charts', {
                url: '/charts',
                views: {
                    'content@': {
                        templateUrl: 'app/html/home/views/home.html',
                        controller : 'chartsController'
                    }
                }
            });
    }
]).controller('chartsController',['$scope',function($scope){
    $scope.message = 'charts';
}]);
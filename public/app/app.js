angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider) {
   $locationProvider.html5Mode(true);
   $routeProvider
   .when('/', { templateURL: '/partials/main' , controller: 'mainCtrl'} )
});

angular.module('app').controller('mainCtrl', ['$scope', function($scope) {
    $scope.myVar = 'test';
}]);
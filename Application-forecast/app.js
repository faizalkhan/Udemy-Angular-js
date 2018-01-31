var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource', 'ngSanitize']);

weatherApp.config(['$locationProvider', '$routeProvider', '$sceDelegateProvider', function($locationProvider, $routeProvider, $sceDelegateProvider)
{
        $sceDelegateProvider.resourceUrlWhitelist([
   // Allow same origin resource loads.
   'self',
   // Allow loading from our assets domain.  Notice the difference between * and **.
   'http://samples.openweathermap.org/data/2.5/weather']); 
    $locationProvider.hashPrefix('');
    $routeProvider

    
    
    
    .when('/', {
        
        templateUrl : 'pages/home.html',
        controller :  'homeController'
    })
        
    .when('/forecast', {
        
         templateUrl : 'pages/forecast.html',
         controller : 'forecastController'
     })
    
    
}])
//services
weatherApp.service('cityService', function(){ 
    
    this.city = "London";
});

weatherApp.controller('homeController', ['$scope', 'cityService', '$sce', function($scope, cityService, $sce)
{
     $scope.city = cityService.city;
    
     
    $scope.$watch('city', function()
    {
       cityService.city = $scope.city;
    })
    
    
}]);

weatherApp.controller('forecastController', ['$scope', '$resource', 'cityService', '$sce', function($scope, $resource, cityService,$sce)
{
    $scope.city = cityService.city;
    $scope.weatherApi = 
        $resource($sce.getTrustedResourceUrl('http://samples.openweathermap.org/data/2.5/weather'));                   
                                         
    
    $scope.weatherResult = $scope.weatherApi.get({ q :$scope.city, appid: '6907d289e10d714a6e88b30761fae22'});
    
    console.log($scope.weatherResult);
    
}]);
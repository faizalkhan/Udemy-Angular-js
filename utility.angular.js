var app = angular.module('faizal', ['ngMessages', 'ngResource','ui.bootstrap', 'ngRoute']);

app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('');
    
        $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
   .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
 


}]);

app.service('nameService', function() {
    var self = this;
    this.name = 'john deo';
    console.log(this);
    this.namelength = function()
    {
        this.name = 'john';
       return self.name.length; 
        console.log(this);
    }
    
    
});
app.controller('mainController',['$scope', '$log', 'nameService',  function($scope, $log, nameService)
              {
                                 
                  $scope.name = "main";
                  
                 // $scope.main = "This is first property";
                  
                  //$log.log($scope);
                  $log.main = "this is first property";
                    $log.log($scope);
                  
                  $log.log(nameService.name);
                  $log.log(nameService.namelength());
                  
                  
}])
app.controller('secondController', ['$scope', '$log','$routeParams',  function($scope, $log, $routeParams)
              {
                                 
                  $scope.last = $routeParams.num || 1;
                  //console.log($scope.name);
                  $log.second = "Th is is second property";
                  
                  $log.log($scope);
}])

//app.controller('mainController',['$scope', '$log', '$filter', '$resource',  '$timeout', function($scope, $log, $filter, $resource, $timeout)
//              {
//                                 
//                     
//    
//    $scope.name  = 'John';
//                  
//                  $scope.alert = function()
//                  {
//                      alert("clicked");
//                  }
//                  
//        
//                  
//                  $scope.handle = "";
//                  
//                  $scope.lowercasehandle = function()
//                  {
//                      return $filter('uppercase')($scope.handle);
//                  }
//                   
//       /*     $scope.$watch('handle', function(newValue, oldValue)
//             {
//                $log.info('changed');
//                console.log('old value :' + oldValue);
//                console.log( 'new value :' + newValue);
//           
//                
//            });*/
//                  
//                   $timeout(function() {
//                   
//                        $scope.name ='faizal';
//                        console.log('time changed');
//                    
//                  }, 3000);
//                             
//                  
///*       $timeout(function() {
//           
//            $scope.name  = 'Martin';
//       }, 3000);        
//                  
//    $scope.formattedname = $filter('uppercase')($scope.name);
//       $log.info($scope); 
//    
//    console.log($resource);
//    $log.info($scope.name); 
//    $log.info($scope.formattedname); */
//    
//  /*  console.log($log);
//     console.log($scope);*/
//    
///*    $log.log("hello"); 
//    $log.info("information");
//    $log.warn("warn");
//    $log.debug("debug"); 
//    $log.error("error"); */
//
//   /* $scope.name = 'tony';
//    $scope.getname = function(){
//      return 'john Doe';    
//    }
//    $scope.getname();
//    console.log($scope.getname());*/
//    
//}])



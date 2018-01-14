var app = angular.module('faizal', ['ngMessages', 'ngResource','ui.bootstrap']);

app.controller('mainController', ['$scope', '$log', '$filter', '$resource',  '$timeout', '$http', function($scope, $log, $filter, $resource, $timeout, $http)
              {
    
    $scope.name  = 'John';
                  
                  $scope.characters = 5;
                  $scope.handle = "";
                  
                  $scope.lowercasehandle = function()
                  {
                      return $filter('uppercase')($scope.handle);
                  }
                  
  /*   $scope.rules = [
         { rulename : "must be 5 characters"  },
         {rulename : "mustnot be used elsewhere"}, 
         {rulename : "must be cool"}
    
         
         
     ]*/
                                               
    
                  $http.get('https://www.w3schools.com/angular/customers.php').then(function successCallback (result)
                            {
                                 console.log(result);
                      $scope.rules = result.data.records;
                      
                        console.log($scope.rules);
 
                         },function errorCallback (data, status)
                                 {
                      
                      console.log(data);
                       console.log(status);
                       
                  }  )  
                  
       $timeout(function() {
           
            $scope.name  = 'Martin';
       }, 3000);        
                  
    $scope.formattedname = $filter('uppercase')($scope.name);
       $log.info($scope); 
    
    console.log($resource);
    $log.info($scope.name); 
    $log.info($scope.formattedname); 
    
  /*  console.log($log);
     console.log($scope);*/
    
    $log.log("hello"); 
    $log.info("information");
    $log.warn("warn");
    $log.debug("debug"); 
    $log.error("error"); 

   /* $scope.name = 'tony';
    $scope.getname = function(){
      return 'john Doe';    
    }
    $scope.getname();
    console.log($scope.getname());*/
    
}])


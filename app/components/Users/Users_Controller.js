app.controller('Controller_Users', function ($scope, storage_service){
    $scope.Users = [{
            
            'pseudo': 'Guillaume', 
            'password': '12345', 
            'email': 'guillaume@efreitech.fr', 
            }, 
            { 'pseudo': 'Matthieu', 
              'password' : '54321',
              'email': 'matthieu@efreitech.fr', 
        
            }];
    $scope.pseudo; 
    $scope.password; 
    $scope.email ; 
    $scope.set = function () {
        storage_service.set('pseudo', $scope.pseudo);
        storage_service.set('password', $scope.password);
        storage_service.set('email', $scope.email);  
    } ;
    
    $scope.get = function() {
      storage_service.get($scope.pseudo, "Pseudo incorrect");
      storage_service.get($scope.email, "email incorrect"); 
      storage_service.get($scope.password,"password incorrect"); 
    };
    
    $scope.setObject = function() {
        storage_service.setObject('Object' ,{ 'pseudo' : $scope.pseudo, 'password': $scope.password, 'email': $scope.email});
    };
    
    $scope.getObject = function() {
        storage_service.getObject({ 'pseudo' : $scope.pseudo, 'password': $scope.password, 'email': $scope.email}, "Vous n etes pas inscrit"); 
    } 
    
    $scope.destroy = function () {
        storage_service.destroy();  
    } 
    
    $scope.remove = function() {
        storage_service.remove();
    }
});
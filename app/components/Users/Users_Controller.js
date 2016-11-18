app.controller('Controller_Users', function ($scope, storage_service){
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
        storage_service.setObject('Object' , { 'pseudo' : $scope.pseudo, 'password': $scope.password, 'email': $scope.email});
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
    
    $scope.Users = [{
            'pseudo': 'Guillaume', 
            'password': '12345', 
            'email': 'guillaume@efreitech.fr', 
            }, 
                    
            { 
            'pseudo': 'Matthieu', 
            'password' : '54321',
            'email': 'matthieu@efreitech.fr',
            },
            {
              'pseudo': 'Majdi', 
              'password': 'AAAAA', 
              'email': 'majdi@efreitech.fr',   
            }]; 
    
    $scope.InitStorage = function () {
    for (var i=0; i< $scope.Users.length ; i++){
        storage_service.setObject('User_' + i, $scope.Users[i]); 
        storage_service.set("Pseudo", $scope.Users[i].pseudo);
        console.log($scope.Users[i]);
    }
    };
  
    
    $scope.Connexion = function () { 
    var temp = storage_service.getObject($scope.Users[1], "faux");  
    
    if ($scope.pseudo != temp.pseudo || $scope.password != temp.password || $scope.email != temp.email){
        //window.location.reload(false);
        console.log("compte erroné");
          }
    else {
            console.log("Bienvenue "+$scope.pseudo);   
        }
           
    
        
        
    };
 
   
   
});
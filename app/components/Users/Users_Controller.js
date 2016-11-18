app.controller('Controller_Users', function ($scope, storage_service, $rootScope){
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
    $scope.temp = []; 
    $rootScope.Isconnected = false;
    $scope.InitStorage = function () {
    for (var i=0; i< $scope.Users.length ; i++){
        storage_service.setObject('User_' + i, $scope.Users[i]);
     }
    };
  
    
    $scope.Connexion = function () { 
        
    if ($scope.pseudo == " " || $scope.password == " " || $scope.email == " ") {
            alert("Les champs sont vides"); 
        }
        
    
     for(var i=0; i<$scope.Users.length; i++)   {
        $scope.temp[i] = storage_service.getObject('User_'+ i, "faux");
         
        if($scope.pseudo == $scope.temp[i].pseudo && $scope.password == $scope.temp[i].password && $scope.email == $scope.temp[i].email){ 
            $rootScope.Isconnected = true; 
            break;
            } 
         
      
     } 
    
    if ($rootScope.Isconnected == true) {
        console.log("Bonjour " + $scope.pseudo );
         window.location.replace('/');
    }
    else{
        alert("compte inconnu");
        window.location.reload(); 
    }    
      
              
        
           
    };
 
   
   
});
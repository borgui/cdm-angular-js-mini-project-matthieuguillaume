app.directive('myMarvelCharacter', function(charData) {
   return{
          restrict: 'A', 
          templateUrl: 'app/components/characters/InfosCharacters.html', 
          link : function(scope, el , attrs){
            charData.getCharacters(); 
             
    }  
   } 
    
});
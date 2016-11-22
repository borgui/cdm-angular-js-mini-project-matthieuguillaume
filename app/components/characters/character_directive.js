app.directive('myMarvelCharacter', function(charData) {
   return{
          restrict: 'A', 
          templateUrl: 'app/components/characters/Infos_characters_div.html', 
          link : function(scope, el , attrs){
            charData.getInfosCharacters(); 
             
    }  
   } 
    
});
app.directive('myRefreshApi', function (comicsData, charData) {
    return {
        restrict : 'E', 
        replace : true , 
        link: function(scope , el, attrs){
            scope.refreshApi = function() {
                window.location.reload(); 
                comicsData.getComics();
                charData.getCharacters(); 
         
        }
        } 
    }
    
    
}); 
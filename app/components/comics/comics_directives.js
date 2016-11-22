app.directive('myMarvelComics', function(comicsData) {
    return {       
            restrict: 'A', 
            templateUrl: 'app/components/comics/InfosComics.html',
            link: function(scope, el, attrs) {
                comicsData.getComics();
                
            }
                
    }
    
    
});
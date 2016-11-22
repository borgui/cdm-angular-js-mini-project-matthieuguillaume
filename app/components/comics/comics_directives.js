app.directive('myMarvelComics', function(comicsData) {
    return {       
            restrict: 'A', 
            templateUrl: 'app/components/comics/Infos_comics_div.html',
            link: function(scope, el, attrs) {
                comicsData.getComics();
                
            }
                
    }
    
    
});
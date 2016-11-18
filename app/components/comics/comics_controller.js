app.controller('comicsController', function($scope, comicsData){
	$scope.comics;
	$scope.loading = true;
	getComics();
	function getComics(){
		comicsData.getComics()
		.then(function(response){
			$scope.comics = response.data.data.results;
			console.log(response.data.data.results);
			$scope.loading = false;
		})
	}
	
});
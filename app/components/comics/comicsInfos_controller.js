app.controller('comicsInfosController', function($scope,comicsData, $routeParams){
	$scope.id = $routeParams.id;
	getInfosComics($scope.id);
	function getInfosComics(id){
		comicsData.getComicsInfos(id)
		.then(function(response){
			$scope.comics = response.data.data.results[0];
			console.log(response.data.data.results[0]);
			$scope.loading = false;
		})
	}
})
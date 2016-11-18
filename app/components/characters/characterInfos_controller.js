app.controller('characterInfosController', function($scope,charData, $routeParams){
	$scope.id = $routeParams.id;
	getInfosCharacter($scope.id);
	function getInfosCharacter(id){
		charData.getCharacterInfos(id)
		.then(function(response){
			$scope.character = response.data.data.results[0];
			console.log(response.data.data.results[0]);
			$scope.loading = false;
		})
	}
})
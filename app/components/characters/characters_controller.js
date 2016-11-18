app.controller('charactersController', function($scope, charData){
	$scope.characters;
	$scope.loading = true;
	getCharacters();
	function getCharacters(){
		charData.getCharacters()
		.then(function(response){
			$scope.characters = response.data.data.results;
			console.log(response.data.data.results);
			$scope.loading = false;
		})
	}
	$scope.info = function(){
		console.log("test");
	}

	
});
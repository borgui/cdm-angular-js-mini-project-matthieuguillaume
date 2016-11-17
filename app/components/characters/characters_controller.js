app.controller('charactersController', function($scope, charData){
	$scope.characters;
	getCharacters();
	function getCharacters(){
		charData.getCharacters()
		.then(function(response){
			$scope.characters = response.data.data.results;
			console.log(response.data.data.results);
		})
	}
	
});
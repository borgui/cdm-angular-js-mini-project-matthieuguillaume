app.controller('charactersController', function($scope, charData, $filter){
	$scope.characters;
	getCharacters();
	function getCharacters(){
		$scope.loading = true;
		charData.getCharacters()
		.then(function(response){
			$scope.characters = response.data.data.results;
			console.log(response.data.data.results);
			$scope.loading = false;
			$scope.fullCharacters = $scope.characters
		})
	}
	$scope.info = function(){
		console.log("test");
	}
	$scope.searchName = function(){
		var searchChar = $filter('searchname')($scope.characters, $scope.inputSearchName);
		if($scope.inputSearchName === ""){
			getCharacters();
		}
		else{
			$scope.characters = searchChar; 
		}
	}
	$scope.limitCharacters = function(){
		$scope.characters = $scope.fullCharacters;
		var limitChar = $filter('limitCharacters')($scope.characters, $scope.limitValue);
		$scope.characters = limitChar;
	}
	
});
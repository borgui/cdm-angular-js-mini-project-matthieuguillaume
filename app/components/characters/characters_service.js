app.service('charData', ['$http', function($http){

	var baseUrl = "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=bbce0f606ae372c7d36475186561fb22&hash=ae893ae62fc494313929e27d91236e6e";
	this.getCharacters = function(){
			return $http.get(baseUrl);
	}

}]);
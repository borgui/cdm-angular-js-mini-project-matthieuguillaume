app.service('charData', ['$http', function($http){
	var key = "ts=1&apikey=bbce0f606ae372c7d36475186561fb22&hash=ae893ae62fc494313929e27d91236e6e";
	var baseUrl = "https://gateway.marvel.com/v1/public/characters";
	this.getCharacters = function(){
			return $http.get(baseUrl+"?"+key);
	}
	this.getCharacterInfos = function(id){
			return $http.get(baseUrl+"/"+id+"?"+key);
	}

}]);
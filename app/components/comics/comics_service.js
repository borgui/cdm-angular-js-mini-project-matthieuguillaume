app.service('comicsData', ['$http', function($http){

	var baseUrl = "https://gateway.marvel.com/v1/public/comics?ts=1&apikey=bbce0f606ae372c7d36475186561fb22&hash=ae893ae62fc494313929e27d91236e6e";
	var offsetUrl = "https://gateway.marvel.com/v1/public/comics?ts=1&apikey=bbce0f606ae372c7d36475186561fb22&hash=ae893ae62fc494313929e27d91236e6e&offset="+offset;
	this.getComics = function(){
			return $http.get(baseUrl);
	}
	this.getNextComics = function(offset){
			return $http.get(offsetUrl);
	}
}]);
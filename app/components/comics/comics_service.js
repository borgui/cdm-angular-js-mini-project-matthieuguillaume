app.service('comicsData', ['$http', function($http){
    var key = "ts=1&apikey=bbce0f606ae372c7d36475186561fb22&hash=ae893ae62fc494313929e27d91236e6e";
	var baseUrl = "https://gateway.marvel.com/v1/public/comics";
	this.getComics = function(){
			return $http.get(baseUrl+"?"+key);
	}
    this.getComicsInfos = function(id){
			return $http.get(baseUrl+"/"+id+"?"+key);
	}
}]);
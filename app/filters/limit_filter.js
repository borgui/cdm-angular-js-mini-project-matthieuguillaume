app.filter('limitCharacters', function(){
	return function(characters, limit){
			var newList = [];
			for(i = 0; i < limit ; i++){
				newList.push(characters[i]);
			}
			return newList;
		}

	
})
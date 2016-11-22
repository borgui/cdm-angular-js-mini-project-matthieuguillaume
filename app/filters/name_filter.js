app.filter('searchname', function(){
		return function(item, name){
			console.log(item);
			newCharacters = [];
				for(i = 0; i<item.length ; i++){
					if(item[i].name.indexOf(name) != -1){
						newCharacters.push(item[i]);
					}
				}
				console.log(newCharacters);
				console.log(item);
				
			
			return newCharacters;
		}
})
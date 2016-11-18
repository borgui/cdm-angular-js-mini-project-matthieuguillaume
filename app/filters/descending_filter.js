app.filter('descending', function(){
	return function(item){
			var newItem = item.reverse();
			return newItem;
		}

	
})
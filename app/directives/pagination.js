app.directive('pagination', function(){
	return{	
		restrict:"E",
		scope:{
				totalItem: "@totalItem";
				perPage: "@perPage";
				currentPage: "@currentPage";
		},
		template:{
			
		},
		link: function(scope,element, attrs){	
			var firstIndex
			totalPage = totalItem / 30;
			if(totalPage > 5){
					pages
				}
			}

		}
	}
})
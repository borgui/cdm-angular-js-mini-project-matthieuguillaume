app.factory('storage_service', function($window){
   return {
   
    set: function(key, value) {
      $window.localStorage[key] = value ;   
    },   
       
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;    
    },   
    setObject: function(key, value) {
       $window.localStorage[key] = JSON.stringify(value);  
    }, 
    
    getObject: function(key, defaultValue){
      return JSON.parse($window.localStorage[key] || defaultValue);   
    },
    remove: function (key){
     return $window.localStorage.removeItem(key) ;        
    },
    destroy: function() {
      $window.localStorage.clear();   
    }
   }
    
   
    
    
});
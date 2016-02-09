module.exports = {

  first: function(array) {
  	return array[0];
  },

  last: function(array) {
  	return array[array.length-1];
  },

  empty: function(array) {
  	if(array.length === 0){
  		return true;
  	} else {
  		return false;
  	}
  },

  first_n: function(array, n) {
  	if(array.length === 0) {
  		return [];
  	} else {
			return array.slice(0, n);
  	}
  },

  last_n: function(array, n){
  	if(array.length===0){
  		return [];
  	} else if ( array.length < n) {
  		return array.slice(0, n);
  	} else {
  		return array.slice(-n);
  	}
  },

	drop: function(array, n) {
		if(array.length < n) {
			return [];
		} else {
			return array.slice(-n);
		}
	},

	union: function(array1, array2) {
		if(array1.length ===0 && array2.length===0){
			return [];
		} else{
		return array1.concat(array2);
		}
	},

	intersection: function(array1, array2) {
		for (var i = 0; i < array1.length; i++) {
				for (var j = 0; j < array2.length; j++) {
					if(array1[i] === array2[j]){
						return [array1[i]];
				};
			};
		};
	}
}






















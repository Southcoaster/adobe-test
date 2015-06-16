var MyClass = function(a){

	var i 	= 0, 
	isArray = Array.isArray(a), 
	tagged  = [], // I decided to make this an array so that we can easily tag and recall multiple values if necessary.
	hasNext = true,
	aLen	= a.length,
	current = a[i];	

	// Simple error checking to return undefined and log an error for non-Arrays

	if (!isArray){
		console.log("please define an Array of numbers");
		return undefined;
	}

	return {
		next : function(){
			if (i < aLen - 1) {
				i++;
				current = a[i];
				return current;
			} else{
				hasNext = false;
				return false;
			};				
		},
		current : function(){
			return current
		},
		tag : function(){
			tagged.push(current);
		},
		tagged : function(){
			return tagged
		},
		hasNext : function(){
			return hasNext;
		},
		reverse : function(){
			var newArr = [];
			for (var j = aLen; j > 0; j--) {
				newArr.push(a.pop());
			};
			a = newArr;
			i = (aLen - i)-1;
			current = a[i];
			hasNext = true;
			return a;			
		}
	}
};

// getArray takes 3 parameters, the first are mandatory, name = the css classname of the
// targeted DOM element and Constr = the name of the Constructor function to which 
// we will pass the array of extracted items

var getArray = function(name, Constr, forceNum){
	var el = document.getElementsByClassName(name)[0],
	contents = el.innerHTML,
	i = 0,
	extracted;
	contents = contents.trim();
	extracted = contents.split(" ");

	// I put this part in as an extra. At this point extracted will contain 
	// an array of strings. If "true" is passed as the 3rd argument the 
	// function will perform type coercion on each item to change it to a number

	if(forceNum === true){
		for (; i < extracted.length; i++) {
			extracted[i] = Number(extracted[i]);
		};
	}

	return new Constr(extracted);
};

// var it2 = getArray("section", MyClass, true)
// var arr = [1,2,3,4,5,6,7,8,9,111,222,333,444,555];
// var it = new MyClass(arr);




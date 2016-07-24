// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // handles obj values that are not arrays or objects
  if (typeof obj === "string") {
  	return "\"" + obj + "\"";
  }
  else if (obj === null) {
  	return "null";
  }
  else if (typeof obj === "number" || typeof obj === "boolean") {
  	return obj.toString();
  }

  // If the object is array, iterate through the length and run stringifyJSON on it.
  if (Array.isArray(obj)) {
  	var array = [];
  	for (var i = 0; i < obj.length; i++) {
  		array.push(stringifyJSON(obj[i]));
  	}
  	return "[" + array.join(",") + "]";
  }

  // If the object is an object, iterate through the length and run stringifyJSON on it.
  // Also check the object values to ensure they are valid.
  if (typeof obj === 'object') {
  	var object = [];
  	for (var prop in obj) {
  	  //Check to see if value is undefined or a function. Skip if it is.
  	  if (obj[prop] === undefined || typeof obj[prop] === "function") {
  	  	continue;
  	  }
  	  object.push(stringifyJSON(prop) + ":" + stringifyJSON(obj[prop]));
  	}
  	return "{" + object.join(",") + "}";
  }
};

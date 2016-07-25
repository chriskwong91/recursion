// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // Array to store elements
  var elements = [];

  // set initial node to document.body
  var node = document.body;
  
  function getElements(node) {
  	// if node contains class, add node to element list
  	if (node.classList !== undefined && node.classList.contains(className)) {
  		elements.push(node);
  	}

  	// check to seee if there are child nodes
  	if (node.hasChildNodes()) {
  		// iterate through the childnodes and check classes through recursion
  	  for (var i = 0; i < node.childNodes.length; i++) {
  	    getElements(node.childNodes[i]);
  	  }
  	}
  }
  getElements(node);
  return elements;
};

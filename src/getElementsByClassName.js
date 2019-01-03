// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var results = [];

  var nodes = function(element){

    if(element.classList && element.classList.contains(className)){
      results.push(element);
    }

    if(element.children){
      for(var i = 0; i < element.children.length; i++){
        var child = element.children[i];
          nodes(child);
      }
    }
  }

  nodes(document.body);

  return results;

};
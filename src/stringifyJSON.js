// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
//is this readable?
var stringifyJSON = function(obj) {
  var arrOfVals = [];
  //function to determine the 'real' typeof object and array

  var realType = function(obj){
    var t = typeof(obj);
    if(t === 'object'){
      if(Array.isArray(obj)){
        return 'array';
      } else {
        return 'object';
      }
    }
  }

  //handle primitives
  if(typeof obj === 'number' || typeof obj === 'boolean'){
    return obj.toString();
  }

  if(obj === null){
    return 'null';
  }

  if(typeof obj === 'string'){
    return  '"' + obj + '"';
  }


  //handle arrays
  if(realType(obj) === 'array'){
    if(obj.length === 0){
      return '[]';
    }else {
      obj.forEach(function(x){
        arrOfVals.push(stringifyJSON(x));
      });
      return '['+ arrOfVals +']';
    }
  }


  //handle objects
  if(realType(obj) === 'object'){
    var objKeys = Object.keys(obj);

    if(objKeys.length === 0){
      return '{}';
     } else {
      for (var key in obj){
        if (typeof obj[key] !== 'function' && typeof obj[key] !== 'undefined'){
        arrOfVals.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]));
        }
      }
    }
  }
   return '{'+ arrOfVals +'}';

};
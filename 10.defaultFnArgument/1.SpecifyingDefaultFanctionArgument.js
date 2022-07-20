/* older function to ES6 the default parameter are placed by using or(shortcircute) 

in morder we can specified default value in the time of function specifing the parameter. 

this default parameter are word like below

1. if the use are not specifi any value to any argument the it's asign as a undefined if the parameter value are undefined then the parameter value is become the default value. But if the user sand (nul) as a arguemnt to any default parameter then it's going to assign nothing.

*/

// let do ES5 exaple
function makeAjaxRequestES5(url, method) {
  // if (!method) {
  //   return method = "GET";
  // }
  // return method

  // by using shortcircute
  return method || "GET";

  // logic to make the request
}

console.log(makeAjaxRequestES5("google.com"));
console.log(makeAjaxRequestES5("google.com", "POST"));

// let's do it by using ES6/15

function makeAjaxRequestES6(url, method = "GET") {
  // if user not specifi the method then user make a get request. because the method arg are (undefined). if it's contain some value then the value is become the request method to the end server

  return method;
}

console.log(makeAjaxRequestES6("google.com", null));
console.log(makeAjaxRequestES6("google.com", "POST"));

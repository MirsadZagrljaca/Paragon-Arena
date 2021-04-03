// Only change code below this line
function myEqualFunction(variable) {
  if (variable === 23) {
    return "Equal";
  } else {
    return "Not Equal";
  }
}

console.log(myEqualFunction(5));
console.log(myEqualFunction(23));
console.log(myEqualFunction("23"));
console.log(myEqualFunction("23"));
console.log(myEqualFunction("text"));
// Only change code above this line
module.exports = myEqualFunction;

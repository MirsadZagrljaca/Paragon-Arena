// Only change code below this line
function compareDifferentValues(x, y) {
  if (x === y) {
    return "Equal";
  } else {
    return "Not equal";
  }
}

console.log(compareDifferentValues(8, "8"));
console.log(compareDifferentValues("8", 8));
console.log(compareDifferentValues("8", 8));
console.log(compareDifferentValues("8", "8"));
console.log(compareDifferentValues(8, 8));
// Only change code above this line
module.exports = compareDifferentValues;
